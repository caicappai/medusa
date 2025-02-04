"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemReturnActionWorkflow = exports.removeItemReturnActionWorkflowId = exports.removeReturnItemActionValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const remove_return_shipping_method_1 = require("./remove-return-shipping-method");
const update_return_1 = require("./update-return");
/**
 * This step validates that a return item can be removed.
 */
exports.removeReturnItemActionValidationStep = (0, workflows_sdk_1.createStep)("remove-item-return-action-validation", async function ({ order, orderChange, orderReturn, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No request return found for return ${input.return_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.RETURN_ITEM) {
        throw new Error(`Action ${associatedAction.id} is not requesting item return`);
    }
});
exports.removeItemReturnActionWorkflowId = "remove-item-return-action";
/**
 * This workflow removes a return item.
 */
exports.removeItemReturnActionWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeItemReturnActionWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: orderReturn.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: [
            "id",
            "status",
            "version",
            "return_id",
            "order_id",
            "actions.*",
            "canceled_at",
            "confirmed_at",
            "declined_at",
        ],
        variables: {
            filters: {
                order_id: orderReturn.order_id,
                return_id: orderReturn.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.removeReturnItemActionValidationStep)({
        order,
        input,
        orderReturn,
        orderChange,
    });
    (0, steps_1.deleteOrderChangeActionsStep)({ ids: [input.action_id] });
    const updatedOrderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["actions.action", "actions.return_id", "actions.id"],
        variables: {
            filters: {
                order_id: orderReturn.order_id,
                return_id: orderReturn.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "updated-order-change-query" });
    const actionIdToDelete = (0, workflows_sdk_1.transform)({ updatedOrderChange, orderReturn }, ({ updatedOrderChange: { actions = [] }, orderReturn: { id: returnId }, }) => {
        const itemActions = actions.filter((c) => c.action === "RETURN_ITEM");
        if (itemActions.length) {
            return null;
        }
        const shippingAction = actions.find((c) => c.action === "SHIPPING_ADD" && c.return_id === returnId);
        if (!shippingAction) {
            return null;
        }
        return shippingAction.id;
    });
    (0, workflows_sdk_1.when)({ actionIdToDelete }, ({ actionIdToDelete }) => {
        return !!actionIdToDelete;
    }).then(() => {
        remove_return_shipping_method_1.removeReturnShippingMethodWorkflow.runAsStep({
            input: {
                return_id: orderReturn.id,
                action_id: actionIdToDelete,
            },
        });
        update_return_1.updateReturnWorkflow.runAsStep({
            input: {
                return_id: orderReturn.id,
                location_id: null,
            },
        });
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=remove-item-return-action.js.map