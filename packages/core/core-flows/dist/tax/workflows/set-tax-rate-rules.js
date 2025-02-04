"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTaxRateRulesWorkflow = exports.setTaxRateRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.setTaxRateRulesWorkflowId = "set-tax-rate-rules";
/**
 * This workflow sets the rules of tax rates.
 */
exports.setTaxRateRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.setTaxRateRulesWorkflowId, (input) => {
    const ruleIds = (0, steps_1.listTaxRateRuleIdsStep)({
        selector: { tax_rate_id: input.tax_rate_ids },
    });
    (0, steps_1.deleteTaxRateRulesStep)(ruleIds);
    const rulesWithRateId = (0, workflows_sdk_1.transform)({ rules: input.rules, rateIds: input.tax_rate_ids }, ({ rules, rateIds }) => {
        return rules
            .map((r) => {
            return rateIds.map((id) => {
                return {
                    ...r,
                    tax_rate_id: id,
                };
            });
        })
            .flat();
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createTaxRateRulesStep)(rulesWithRateId));
});
//# sourceMappingURL=set-tax-rate-rules.js.map