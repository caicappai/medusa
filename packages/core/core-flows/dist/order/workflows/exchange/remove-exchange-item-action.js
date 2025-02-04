"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemExchangeActionWorkflow = exports.removeItemExchangeActionWorkflowId = exports.removeExchangeItemActionValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const remove_exchange_shipping_method_1 = require("./remove-exchange-shipping-method");
/**
 * This step validates that a new item can be removed from an exchange.
 */
exports.removeExchangeItemActionValidationStep = (0, workflows_sdk_1.createStep)("remove-item-exchange-action-validation", async function ({ order, orderChange, orderExchange, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No item exchange found for exchange ${input.exchange_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.ITEM_ADD) {
        throw new Error(`Action ${associatedAction.id} is not adding an item`);
    }
});
exports.removeItemExchangeActionWorkflowId = "remove-item-exchange-action";
/**
 * This workflow removes a new item in an exchange.
 */
exports.removeItemExchangeActionWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeItemExchangeActionWorkflowId, function (input) {
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
    (0, exports.removeExchangeItemActionValidationStep)({
        order,
        input,
        orderExchange,
        orderChange,
    });
    (0, steps_1.deleteOrderChangeActionsStep)({ ids: [input.action_id] });
    const updatedOrderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: [
            "actions.action",
            "actions.id",
            "actions.exchange_id",
            "actions.return_id",
        ],
        variables: {
            filters: {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "updated-order-change-query" });
    const actionIdToDelete = (0, workflows_sdk_1.transform)({ updatedOrderChange, orderExchange }, ({ updatedOrderChange: { actions = [] }, orderExchange: { id: orderExchangeId }, }) => {
        const itemActions = actions.filter((c) => c.action === "ITEM_ADD");
        if (itemActions.length) {
            return null;
        }
        const shippingAction = actions.find((c) => c.action === "SHIPPING_ADD" &&
            c.exchange_id === orderExchangeId &&
            !c.return_id);
        if (!shippingAction) {
            return null;
        }
        return shippingAction.id;
    });
    (0, workflows_sdk_1.when)({ actionIdToDelete }, ({ actionIdToDelete }) => {
        return !!actionIdToDelete;
    }).then(() => {
        remove_exchange_shipping_method_1.removeExchangeShippingMethodWorkflow.runAsStep({
            input: {
                exchange_id: orderExchange.id,
                action_id: actionIdToDelete,
            },
        });
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=remove-exchange-item-action.js.map