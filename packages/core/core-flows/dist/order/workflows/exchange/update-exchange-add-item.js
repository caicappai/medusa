"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExchangeAddItemWorkflow = exports.updateExchangeAddItemWorkflowId = exports.updateExchangeAddItemValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a new item can be removed from an exchange.
 */
exports.updateExchangeAddItemValidationStep = (0, workflows_sdk_1.createStep)("update-exchange-add-item-validation", async function ({ order, orderChange, orderExchange, input, }, context) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No request to add item for exchange ${input.exchange_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.ITEM_ADD) {
        throw new Error(`Action ${associatedAction.id} is not adding an item`);
    }
});
exports.updateExchangeAddItemWorkflowId = "update-exchange-add-item";
/**
 * This workflow updates a new item in the exchange.
 */
exports.updateExchangeAddItemWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateExchangeAddItemWorkflowId, function (input) {
    const orderExchange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_exchange",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.exchange_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: orderExchange.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.updateExchangeAddItemValidationStep)({
        order,
        input,
        orderExchange,
        orderChange,
    });
    const updateData = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ input, orderChange }) => {
        const originalAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
        const data = input.data;
        return {
            id: input.action_id,
            details: {
                quantity: data.quantity ?? originalAction.details?.quantity,
            },
            internal_note: data.internal_note,
        };
    });
    (0, steps_1.updateOrderChangeActionsStep)([updateData]);
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=update-exchange-add-item.js.map