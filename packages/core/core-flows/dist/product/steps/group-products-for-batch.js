"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupProductsForBatchStep = exports.groupProductsForBatchStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.groupProductsForBatchStepId = "group-products-for-batch";
/**
 * This step groups products to be created and updated.
 */
exports.groupProductsForBatchStep = (0, workflows_sdk_1.createStep)(exports.groupProductsForBatchStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.PRODUCT);
    const existingProducts = await service.listProducts({
        // We use the ID to do product updates
        id: data.map((product) => product.id).filter(Boolean),
    }, { select: ["handle"] });
    const existingProductsSet = new Set(existingProducts.map((p) => p.id));
    const { toUpdate, toCreate } = data.reduce((acc, product) => {
        // There are few data normalizations to do if we are dealing with an update.
        if (product.id && existingProductsSet.has(product.id)) {
            acc.toUpdate.push(product);
            return acc;
        }
        // New products and variants will be created with a new ID, even if there is one present in the CSV.
        // To add support for creating with predefined IDs we will need to do changes to the upsert method.
        delete product.id;
        product.variants?.forEach((variant) => {
            delete variant.id;
        });
        acc.toCreate.push(product);
        return acc;
    }, { toUpdate: [], toCreate: [] });
    return new workflows_sdk_1.StepResponse({ create: toCreate, update: toUpdate });
});
//# sourceMappingURL=group-products-for-batch.js.map