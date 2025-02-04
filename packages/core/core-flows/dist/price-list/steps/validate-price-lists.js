"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePriceListsStep = exports.validatePriceListsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validatePriceListsStepId = "validate-price-lists";
/**
 * This step validates that the specified price lists exist.
 */
exports.validatePriceListsStep = (0, workflows_sdk_1.createStep)(exports.validatePriceListsStepId, async (data, { container }) => {
    const pricingModule = container.resolve(utils_1.Modules.PRICING);
    const priceListIds = data.map((d) => d.id);
    const priceLists = await pricingModule.listPriceLists({ id: priceListIds });
    const diff = (0, utils_1.arrayDifference)(priceListIds, priceLists.map((pl) => pl.id));
    if (diff.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Price lists with id: ${diff.join(", ")} was not found`);
    }
    const priceListMap = {};
    for (const priceList of priceLists) {
        priceListMap[priceList.id] = priceList;
    }
    return new workflows_sdk_1.StepResponse(priceListMap);
});
//# sourceMappingURL=validate-price-lists.js.map