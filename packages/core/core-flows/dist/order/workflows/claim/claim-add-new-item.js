"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderClaimAddNewItemWorkflow = exports.orderClaimAddNewItemWorkflowId = exports.orderClaimAddNewItemValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const preview_order_change_1 = require("../../steps/preview-order-change");
const order_validation_1 = require("../../utils/order-validation");
const add_line_items_1 = require("../add-line-items");
const create_order_change_actions_1 = require("../create-order-change-actions");
const update_tax_lines_1 = require("../update-tax-lines");
/**
 * This step validates that a new item can be added to the claim.
 */
exports.orderClaimAddNewItemValidationStep = (0, workflows_sdk_1.createStep)("claim-add-new-item-validation", async function ({ order, orderChange, orderClaim, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.orderClaimAddNewItemWorkflowId = "claim-add-new-item";
/**
 * This workflow adds a new item to a claim.
 */
exports.orderClaimAddNewItemWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.orderClaimAddNewItemWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "order_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "claim-query" });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: orderClaim.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status"],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.orderClaimAddNewItemValidationStep)({
        order,
        orderClaim,
        orderChange,
    });
    const lineItems = add_line_items_1.addOrderLineItemsWorkflow.runAsStep({
        input: {
            order_id: order.id,
            items: input.items,
        },
    });
    const lineItemIds = (0, workflows_sdk_1.transform)(lineItems, (lineItems) => {
        return lineItems.map((item) => item.id);
    });
    update_tax_lines_1.updateOrderTaxLinesWorkflow.runAsStep({
        input: {
            order_id: order.id,
            item_ids: lineItemIds,
        },
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({ order, orderChange, orderClaim, items: input.items, lineItems }, ({ order, orderChange, orderClaim, items, lineItems }) => {
        return items.map((item, index) => ({
            order_change_id: orderChange.id,
            order_id: order.id,
            claim_id: orderClaim.id,
            version: orderChange.version,
            action: utils_1.ChangeActionType.ITEM_ADD,
            internal_note: item.internal_note,
            reference: "order_claim",
            reference_id: orderClaim.id,
            details: {
                reference_id: lineItems[index].id,
                quantity: item.quantity,
                unit_price: item.unit_price ?? lineItems[index].unit_price,
                metadata: item.metadata,
            },
        }));
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: orderChangeActionInput,
    });
    return new workflows_sdk_1.WorkflowResponse((0, preview_order_change_1.previewOrderChangeStep)(orderClaim.order_id));
});
//# sourceMappingURL=claim-add-new-item.js.map