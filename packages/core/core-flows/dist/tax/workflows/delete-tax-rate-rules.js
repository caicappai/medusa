"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaxRateRulesWorkflow = exports.deleteTaxRateRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteTaxRateRulesWorkflowId = "delete-tax-rate-rules";
/**
 * This workflow deletes one or more tax rate rules.
 */
exports.deleteTaxRateRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteTaxRateRulesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.deleteTaxRateRulesStep)(input.ids));
});
//# sourceMappingURL=delete-tax-rate-rules.js.map