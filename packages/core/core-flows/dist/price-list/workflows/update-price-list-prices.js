"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePriceListPricesWorkflow = exports.updatePriceListPricesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_price_list_prices_1 = require("../steps/update-price-list-prices");
const validate_price_lists_1 = require("../steps/validate-price-lists");
const validate_variant_price_links_1 = require("../steps/validate-variant-price-links");
exports.updatePriceListPricesWorkflowId = "update-price-list-prices";
/**
 * This workflow update price lists' prices.
 */
exports.updatePriceListPricesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updatePriceListPricesWorkflowId, (input) => {
    const [_, variantPriceMap] = (0, workflows_sdk_1.parallelize)((0, validate_price_lists_1.validatePriceListsStep)(input.data), (0, validate_variant_price_links_1.validateVariantPriceLinksStep)(input.data));
    return new workflows_sdk_1.WorkflowResponse((0, update_price_list_prices_1.updatePriceListPricesStep)({
        data: input.data,
        variant_price_map: variantPriceMap,
    }));
});
//# sourceMappingURL=update-price-list-prices.js.map