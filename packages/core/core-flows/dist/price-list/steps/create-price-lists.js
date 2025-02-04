"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPriceListsStep = exports.createPriceListsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createPriceListsStepId = "create-price-lists";
/**
 * This step creates a price list.
 */
exports.createPriceListsStep = (0, workflows_sdk_1.createStep)(exports.createPriceListsStepId, async (stepInput, { container }) => {
    const { data, variant_price_map: variantPriceMap } = stepInput;
    const pricingModule = container.resolve(utils_1.Modules.PRICING);
    const createData = data.map((priceListDTO) => {
        const { prices = [], ...rest } = priceListDTO;
        const createPriceListData = { ...rest };
        createPriceListData.prices = prices.map((price) => ({
            currency_code: price.currency_code,
            amount: price.amount,
            min_quantity: price.min_quantity,
            max_quantity: price.max_quantity,
            price_set_id: variantPriceMap[price.variant_id],
            rules: price.rules,
        }));
        return createPriceListData;
    });
    const createdPriceLists = await pricingModule.createPriceLists(createData);
    return new workflows_sdk_1.StepResponse(createdPriceLists, createdPriceLists.map((createdPriceLists) => createdPriceLists.id));
}, async (createdPriceListIds, { container }) => {
    if (!createdPriceListIds?.length) {
        return;
    }
    const pricingModule = container.resolve(utils_1.Modules.PRICING);
    await pricingModule.deletePriceLists(createdPriceListIds);
});
//# sourceMappingURL=create-price-lists.js.map