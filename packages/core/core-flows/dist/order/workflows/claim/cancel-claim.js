"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderClaimWorkflow = exports.cancelOrderClaimWorkflowId = exports.cancelClaimValidateOrderStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const delete_reservations_by_line_items_1 = require("../../../reservation/steps/delete-reservations-by-line-items");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const cancel_return_1 = require("../return/cancel-return");
/**
 * This step validates that a confirmed claim can be canceled.
 */
exports.cancelClaimValidateOrderStep = (0, workflows_sdk_1.createStep)("validate-claim", ({ orderClaim, }) => {
    const orderClaim_ = orderClaim;
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    const throwErrorIf = (arr, pred, message) => {
        if (arr?.some(pred)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, message);
        }
    };
    const notCanceled = (o) => !o.canceled_at;
    throwErrorIf(orderClaim_.fulfillments, notCanceled, "All fulfillments must be canceled before canceling a claim");
});
exports.cancelOrderClaimWorkflowId = "cancel-claim";
/**
 * This workflow cancels a confirmed order claim.
 */
exports.cancelOrderClaimWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelOrderClaimWorkflowId, (input) => {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: [
            "id",
            "order_id",
            "return_id",
            "canceled_at",
            "fulfillments.canceled_at",
            "additional_items.item_id",
        ],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.cancelClaimValidateOrderStep)({ orderClaim, input });
    const lineItemIds = (0, workflows_sdk_1.transform)({ orderClaim }, ({ orderClaim }) => {
        return orderClaim.additional_items?.map((i) => i.item_id);
    });
    (0, workflows_sdk_1.parallelize)((0, steps_1.cancelOrderClaimStep)({
        claim_id: orderClaim.id,
        order_id: orderClaim.order_id,
        canceled_by: input.canceled_by,
    }), (0, delete_reservations_by_line_items_1.deleteReservationsByLineItemsStep)(lineItemIds));
    (0, workflows_sdk_1.when)({ orderClaim }, ({ orderClaim }) => {
        return !!orderClaim.return_id;
    }).then(() => {
        cancel_return_1.cancelReturnWorkflow.runAsStep({
            input: {
                return_id: orderClaim.return_id,
                no_notification: input.no_notification,
            },
        });
    });
});
//# sourceMappingURL=cancel-claim.js.map