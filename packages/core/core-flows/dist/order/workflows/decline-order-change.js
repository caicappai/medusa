"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declineOrderChangeWorkflow = exports.declineOrderChangeWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.declineOrderChangeWorkflowId = "decline-order-change";
/**
 * This workflow declines an order change.
 */
exports.declineOrderChangeWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.declineOrderChangeWorkflowId, (input) => {
    (0, steps_1.declineOrderChangeStep)(input);
});
//# sourceMappingURL=decline-order-change.js.map