"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemClaimActionWorkflow = exports.removeItemClaimActionWorkflowId = exports.removeClaimItemActionValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step confirms that a claim's items can be removed.
 */
exports.removeClaimItemActionValidationStep = (0, workflows_sdk_1.createStep)("remove-item-claim-action-validation", async function ({ order, orderChange, orderClaim, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No item claim found for claim ${input.claim_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.WRITE_OFF_ITEM) {
        throw new Error(`Action ${associatedAction.id} is not claiming an item`);
    }
});
exports.removeItemClaimActionWorkflowId = "remove-item-claim-action";
/**
 * This workflow removes claim items.
 */
exports.removeItemClaimActionWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeItemClaimActionWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: orderClaim.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.removeClaimItemActionValidationStep)({
        order,
        input,
        orderClaim,
        orderChange,
    });
    (0, steps_1.deleteOrderChangeActionsStep)({ ids: [input.action_id] });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=remove-claim-item-action.js.map