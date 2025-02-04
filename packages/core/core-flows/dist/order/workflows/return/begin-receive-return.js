"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beginReceiveReturnWorkflow = exports.beginReceiveReturnWorkflowId = exports.beginReceiveReturnValidationStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a return can be received.
 */
exports.beginReceiveReturnValidationStep = (0, workflows_sdk_1.createStep)("begin-receive-return-validation", async function ({ orderReturn, order, }, context) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
});
exports.beginReceiveReturnWorkflowId = "begin-receive-return";
/**
 * This workflow requests return receival.
 */
exports.beginReceiveReturnWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.beginReceiveReturnWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "version", "status", "canceled_at"],
        variables: { id: orderReturn.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    (0, exports.beginReceiveReturnValidationStep)({ order, orderReturn });
    const orderChangeInput = (0, workflows_sdk_1.transform)({ orderReturn, order, input }, ({ orderReturn, order, input }) => {
        return {
            change_type: "return_receive",
            order_id: order.id,
            return_id: orderReturn.id,
            created_by: input.created_by,
            description: input.description,
            internal_note: input.internal_note,
        };
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createOrderChangeStep)(orderChangeInput));
});
//# sourceMappingURL=begin-receive-return.js.map