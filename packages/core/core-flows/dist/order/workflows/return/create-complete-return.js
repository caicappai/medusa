"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAndCompleteReturnOrderWorkflow = exports.createAndCompleteReturnOrderWorkflowId = exports.createCompleteReturnValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const fulfillment_1 = require("../../../fulfillment");
const create_complete_return_1 = require("../../steps/return/create-complete-return");
const receive_return_1 = require("../../steps/return/receive-return");
const order_validation_1 = require("../../utils/order-validation");
const validate_return_reason_1 = require("../../utils/validate-return-reason");
function prepareShippingMethodData({ orderId, inputShippingOption, returnShippingOption, }) {
    if (!inputShippingOption) {
        return;
    }
    const obj = {
        name: returnShippingOption.name,
        order_id: orderId,
        shipping_option_id: returnShippingOption.id,
        amount: 0,
        is_tax_inclusive: false,
        data: {},
        // Computed later in the flow
        tax_lines: [],
        adjustments: [],
    };
    if ((0, utils_1.isDefined)(inputShippingOption.price) &&
        utils_1.MathBN.gte(inputShippingOption.price, 0)) {
        obj.amount = inputShippingOption.price;
    }
    else {
        if (returnShippingOption.price_type === "calculated") {
            // TODO: retrieve calculated price and assign to amount
        }
        else {
            obj.amount = returnShippingOption.calculated_price.calculated_amount;
            obj.is_tax_inclusive =
                !!returnShippingOption.calculated_price
                    .is_calculated_price_tax_inclusive;
        }
    }
    return obj;
}
function validateCustomRefundAmount({ order, refundAmount, }) {
    // validate that the refund prop input is less than order.item_total (item total)
    // TODO: Probably this amount should be retrieved from the payments linked to the order
    if (refundAmount && utils_1.MathBN.gt(refundAmount, order.item_total)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Refund amount cannot be greater than order total.`);
    }
}
function prepareReceiveItems({ receiveNow, returnId, items, createdBy, }) {
    if (!receiveNow) {
        return {
            return_id: returnId,
            items: [],
        };
    }
    return {
        return_id: returnId,
        items: (items ?? []).map((i) => ({
            id: i.id,
            quantity: i.quantity,
        })),
        created_by: createdBy,
    };
}
function prepareFulfillmentData({ order, input, returnShippingOption, }) {
    const inputItems = input.items;
    const orderItemsMap = new Map(order.items.map((i) => [i.id, i]));
    const fulfillmentItems = inputItems.map((i) => {
        const orderItem = orderItemsMap.get(i.id);
        return {
            line_item_id: i.id,
            quantity: i.quantity,
            return_quantity: i.quantity,
            title: orderItem.variant_title ?? orderItem.title,
            sku: orderItem.variant_sku || "",
            barcode: orderItem.variant_barcode || "",
        };
    });
    let locationId = input.location_id;
    if (!locationId) {
        locationId = returnShippingOption.service_zone.fulfillment_set.location?.id;
    }
    if (!locationId) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot create return without stock location, either provide a location or you should link the shipping option ${returnShippingOption.id} to a stock location.`);
    }
    return {
        input: {
            location_id: locationId,
            provider_id: returnShippingOption.provider_id,
            shipping_option_id: input.return_shipping?.option_id,
            items: fulfillmentItems,
            labels: input.return_shipping?.labels ?? [],
            delivery_address: order.shipping_address ?? {}, // TODO: should it be the stock location address?
            order: order,
        },
    };
}
function prepareReturnShippingOptionQueryVariables({ order, input, }) {
    const variables = {
        id: input.return_shipping?.option_id,
        calculated_price: {
            context: {
                currency_code: order.currency_code,
            },
        },
    };
    if (order.region_id) {
        variables.calculated_price.context["region_id"] = order.region_id;
    }
    return variables;
}
/**
 * This step validates that a return can be created and completed for an order.
 */
exports.createCompleteReturnValidationStep = (0, workflows_sdk_1.createStep)("create-return-order-validation", async function ({ order, input, }, context) {
    if (!input.items) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Items are required to create a return.`);
    }
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({ order, inputItems: input.items });
    await (0, validate_return_reason_1.validateReturnReasons)({ orderId: input.order_id, inputItems: input.items }, context);
    validateCustomRefundAmount({ order, refundAmount: input.refund_amount });
});
exports.createAndCompleteReturnOrderWorkflowId = "create-complete-return-order";
/**
 * This workflow creates and completes a return.
 */
exports.createAndCompleteReturnOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createAndCompleteReturnOrderWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "status",
            "region_id",
            "currency_code",
            "total",
            "item_total",
            "items.*",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.createCompleteReturnValidationStep)({ order, input });
    const returnShippingOptionsVariables = (0, workflows_sdk_1.transform)({ input, order }, prepareReturnShippingOptionQueryVariables);
    const returnShippingOption = (0, common_1.useRemoteQueryStep)({
        entry_point: "shipping_options",
        fields: [
            "id",
            "price_type",
            "name",
            "provider_id",
            "calculated_price.calculated_amount",
            "calculated_price.is_calculated_price_tax_inclusive",
            "service_zone.fulfillment_set.location.id",
        ],
        variables: returnShippingOptionsVariables,
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "return-shipping-option" });
    const shippingMethodData = (0, workflows_sdk_1.transform)({
        orderId: input.order_id,
        inputShippingOption: input.return_shipping,
        returnShippingOption,
    }, prepareShippingMethodData);
    const fulfillmentData = (0, workflows_sdk_1.transform)({ order, input, returnShippingOption }, prepareFulfillmentData);
    const returnFulfillment = fulfillment_1.createReturnFulfillmentWorkflow.runAsStep(fulfillmentData);
    const returnCreated = (0, create_complete_return_1.createCompleteReturnStep)({
        order_id: input.order_id,
        items: input.items,
        shipping_method: shippingMethodData,
        created_by: input.created_by,
    });
    const link = (0, workflows_sdk_1.transform)({ returnCreated, fulfillment: returnFulfillment }, (data) => {
        return [
            {
                [utils_1.Modules.ORDER]: { return_id: data.returnCreated.id },
                [utils_1.Modules.FULFILLMENT]: { fulfillment_id: data.fulfillment.id },
            },
        ];
    });
    (0, common_1.createRemoteLinkStep)(link);
    const receiveItems = (0, workflows_sdk_1.transform)({
        receiveNow: input.receive_now ?? false,
        returnId: returnCreated.id,
        items: order.items,
        createdBy: input.created_by,
    }, prepareReceiveItems);
    (0, receive_return_1.receiveReturnStep)(receiveItems);
    (0, workflows_sdk_1.parallelize)((0, common_1.emitEventStep)({
        eventName: utils_1.OrderWorkflowEvents.RETURN_REQUESTED,
        data: {
            order_id: order.id,
            return_id: returnCreated.id,
        },
    }).config({ name: "emit-return-requested-event" }), (0, common_1.emitEventStep)({
        eventName: utils_1.OrderWorkflowEvents.RETURN_RECEIVED,
        data: {
            order_id: order.id,
            return_id: returnCreated.id,
        },
    }).config({ name: "emit-return-received-event" }));
});
//# sourceMappingURL=create-complete-return.js.map