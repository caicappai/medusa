"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaxRatesWorkflow = exports.deleteTaxRatesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteTaxRatesWorkflowId = "delete-tax-rates";
/**
 * This workflow deletes one or more tax rates.
 */
exports.deleteTaxRatesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteTaxRatesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.deleteTaxRatesStep)(input.ids));
});
//# sourceMappingURL=delete-tax-rates.js.map