"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderExchangeWorkflow = exports.cancelOrderExchangeWorkflowId = exports.cancelExchangeValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const delete_reservations_by_line_items_1 = require("../../../reservation/steps/delete-reservations-by-line-items");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const cancel_return_1 = require("../return/cancel-return");
/**
 * This step validates that an exchange can be canceled.
 */
exports.cancelExchangeValidateOrder = (0, workflows_sdk_1.createStep)("validate-exchange", ({ orderExchange, }) => {
    const orderExchange_ = orderExchange;
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    const throwErrorIf = (arr, pred, message) => {
        if (arr?.some(pred)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, message);
        }
    };
    const notCanceled = (o) => !o.canceled_at;
    throwErrorIf(orderExchange_.fulfillments, notCanceled, "All fulfillments must be canceled before canceling am exchange");
});
exports.cancelOrderExchangeWorkflowId = "cancel-exchange";
/**
 * This workflow cancels a confirmed exchange.
 */
exports.cancelOrderExchangeWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelOrderExchangeWorkflowId, (input) => {
    const orderExchange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_exchange",
        fields: [
            "id",
            "order_id",
            "return_id",
            "canceled_at",
            "fulfillments.canceled_at",
            "additional_items.item_id",
        ],
        variables: { id: input.exchange_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.cancelExchangeValidateOrder)({ orderExchange, input });
    const lineItemIds = (0, workflows_sdk_1.transform)({ orderExchange }, ({ orderExchange }) => {
        return orderExchange.additional_items?.map((i) => i.item_id);
    });
    (0, workflows_sdk_1.parallelize)((0, steps_1.cancelOrderExchangeStep)({
        exchange_id: orderExchange.id,
        order_id: orderExchange.order_id,
        canceled_by: input.canceled_by,
    }), (0, delete_reservations_by_line_items_1.deleteReservationsByLineItemsStep)(lineItemIds));
    (0, workflows_sdk_1.when)({ orderExchange }, ({ orderExchange }) => {
        return !!orderExchange.return_id;
    }).then(() => {
        cancel_return_1.cancelReturnWorkflow.runAsStep({
            input: {
                return_id: orderExchange.return_id,
                no_notification: input.no_notification,
            },
        });
    });
});
//# sourceMappingURL=cancel-exchange.js.map