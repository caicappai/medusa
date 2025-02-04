"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductsWorkflow = exports.deleteProductsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const delete_products_1 = require("../steps/delete-products");
const get_products_1 = require("../steps/get-products");
const inventory_1 = require("../../inventory");
exports.deleteProductsWorkflowId = "delete-products";
/**
 * This workflow deletes one or more products.
 */
exports.deleteProductsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductsWorkflowId, (input) => {
    const productsToDelete = (0, get_products_1.getProductsStep)({ ids: input.ids });
    const variantsToBeDeleted = (0, workflows_sdk_1.transform)({ productsToDelete }, (data) => {
        return data.productsToDelete
            .flatMap((product) => product.variants)
            .map((variant) => variant.id);
    });
    const variantsWithInventoryStepResponse = (0, common_1.useQueryGraphStep)({
        entity: "variants",
        fields: [
            "id",
            "manage_inventory",
            "inventory.id",
            "inventory.variants.id",
        ],
        filters: {
            id: variantsToBeDeleted,
        },
    });
    const toDeleteInventoryItemIds = (0, workflows_sdk_1.transform)({ variants: variantsWithInventoryStepResponse.data }, (data) => {
        const variants = data.variants || [];
        const variantsMap = new Map(variants.map((v) => [v.id, true]));
        const toDeleteIds = new Set();
        variants.forEach((variant) => {
            if (!variant.manage_inventory) {
                return;
            }
            for (const inventoryItem of variant.inventory) {
                if (inventoryItem.variants.every((v) => variantsMap.has(v.id))) {
                    toDeleteIds.add(inventoryItem.id);
                }
            }
        });
        return Array.from(toDeleteIds);
    });
    inventory_1.deleteInventoryItemWorkflow.runAsStep({
        input: toDeleteInventoryItemIds,
    });
    const [, deletedProduct] = (0, workflows_sdk_1.parallelize)((0, common_1.removeRemoteLinkStep)({
        [utils_1.Modules.PRODUCT]: {
            variant_id: variantsToBeDeleted,
            product_id: input.ids,
        },
    }).config({ name: "remove-product-variant-link-step" }), (0, delete_products_1.deleteProductsStep)(input.ids));
    const productIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductWorkflowEvents.DELETED,
        data: productIdEvents,
    });
    const productsDeleted = (0, workflows_sdk_1.createHook)("productsDeleted", {
        ids: input.ids,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedProduct, {
        hooks: [productsDeleted],
    });
});
//# sourceMappingURL=delete-products.js.map