"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReturnShippingMethodWorkflow = exports.createReturnShippingMethodWorkflowId = exports.createReturnShippingMethodValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const create_order_shipping_methods_1 = require("../../steps/create-order-shipping-methods");
const order_validation_1 = require("../../utils/order-validation");
const prepare_shipping_method_1 = require("../../utils/prepare-shipping-method");
const create_order_change_actions_1 = require("../create-order-change-actions");
const update_tax_lines_1 = require("../update-tax-lines");
/**
 * This step validates that a shipping method can be created for a return.
 */
exports.createReturnShippingMethodValidationStep = (0, workflows_sdk_1.createStep)("validate-create-return-shipping-method", async function ({ order, orderChange, orderReturn, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.createReturnShippingMethodWorkflowId = "create-return-shipping-method";
/**
 * This workflow creates a shipping method for a return.
 */
exports.createReturnShippingMethodWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createReturnShippingMethodWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: [
            "id",
            "status",
            "order_id",
            "claim_id",
            "exchange_id",
            "canceled_at",
        ],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "currency_code", "canceled_at"],
        variables: { id: orderReturn.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const shippingOptions = (0, common_1.useRemoteQueryStep)({
        entry_point: "shipping_option",
        fields: [
            "id",
            "name",
            "calculated_price.calculated_amount",
            "calculated_price.is_calculated_price_tax_inclusive",
        ],
        variables: {
            id: input.shipping_option_id,
            calculated_price: {
                context: { currency_code: order.currency_code },
            },
        },
    }).config({ name: "fetch-shipping-option" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version"],
        variables: {
            filters: {
                order_id: orderReturn.order_id,
                return_id: orderReturn.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.createReturnShippingMethodValidationStep)({
        order,
        orderReturn,
        orderChange,
    });
    const shippingMethodInput = (0, workflows_sdk_1.transform)({
        relatedEntity: orderReturn,
        shippingOptions,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, (0, prepare_shipping_method_1.prepareShippingMethod)("return_id"));
    const createdMethods = (0, create_order_shipping_methods_1.createOrderShippingMethods)({
        shipping_methods: [shippingMethodInput],
    });
    const shippingMethodIds = (0, workflows_sdk_1.transform)(createdMethods, (createdMethods) => {
        return createdMethods.map((item) => item.id);
    });
    update_tax_lines_1.updateOrderTaxLinesWorkflow.runAsStep({
        input: {
            order_id: order.id,
            shipping_method_ids: shippingMethodIds,
            is_return: true,
        },
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({
        order,
        orderReturn,
        shippingOptions,
        createdMethods,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, ({ shippingOptions, orderReturn, order, createdMethods, customPrice, orderChange, input, }) => {
        const shippingOption = shippingOptions[0];
        const createdMethod = createdMethods[0];
        const methodPrice = customPrice ?? shippingOption.calculated_price.calculated_amount;
        return {
            action: utils_1.ChangeActionType.SHIPPING_ADD,
            reference: "order_shipping_method",
            order_change_id: orderChange.id,
            reference_id: createdMethod.id,
            amount: methodPrice,
            order_id: order.id,
            return_id: orderReturn.id,
            claim_id: input.claim_id,
            exchange_id: input.exchange_id,
        };
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: [orderChangeActionInput],
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=create-return-shipping-method.js.map