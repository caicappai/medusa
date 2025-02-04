"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShippingOptionRulesStep = exports.updateShippingOptionRulesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.updateShippingOptionRulesStepId = "update-shipping-option-rules";
/**
 * This step updates one or more shipping option rules.
 */
exports.updateShippingOptionRulesStep = (0, workflows_sdk_1.createStep)(exports.updateShippingOptionRulesStepId, async (input, { container }) => {
    if (!input.data?.length) {
        return;
    }
    const { data } = input;
    const fulfillmentModule = container.resolve(utils_1.Modules.FULFILLMENT);
    const ids = data.map((d) => d.id);
    const shippingOptionRules = await fulfillmentModule.listShippingOptionRules({ id: ids }, { select: ["id", "attribute", "operator", "value", "shipping_option_id"] });
    const updatedPromotionRules = await fulfillmentModule.updateShippingOptionRules(data);
    return new workflows_sdk_1.StepResponse(updatedPromotionRules, shippingOptionRules);
}, async (previousRulesData, { container }) => {
    if (!previousRulesData?.length) {
        return;
    }
    const fulfillmentModule = container.resolve(utils_1.Modules.FULFILLMENT);
    await fulfillmentModule.updateShippingOptionRules(previousRulesData);
});
//# sourceMappingURL=update-shipping-option-rules.js.map