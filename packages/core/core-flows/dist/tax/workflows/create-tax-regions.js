"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaxRegionsWorkflow = exports.createTaxRegionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createTaxRegionsWorkflowId = "create-tax-regions";
/**
 * This workflow creates one or more tax regions.
 */
exports.createTaxRegionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createTaxRegionsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createTaxRegionsStep)(input));
});
//# sourceMappingURL=create-tax-regions.js.map