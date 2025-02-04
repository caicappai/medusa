"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductVariantsWorkflow = exports.deleteProductVariantsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const inventory_1 = require("../../inventory");
exports.deleteProductVariantsWorkflowId = "delete-product-variants";
/**
 * This workflow deletes one or more product variants.
 */
exports.deleteProductVariantsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductVariantsWorkflowId, (input) => {
    (0, common_1.removeRemoteLinkStep)({
        [utils_1.Modules.PRODUCT]: { variant_id: input.ids },
    }).config({ name: "remove-variant-link-step" });
    const variantsWithInventoryStepResponse = (0, common_1.useQueryGraphStep)({
        entity: "variants",
        fields: [
            "id",
            "manage_inventory",
            "inventory.id",
            "inventory.variants.id",
        ],
        filters: {
            id: input.ids,
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
    const deletedProductVariants = (0, steps_1.deleteProductVariantsStep)(input.ids);
    const variantIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductVariantWorkflowEvents.DELETED,
        data: variantIdEvents,
    });
    const productVariantsDeleted = (0, workflows_sdk_1.createHook)("productVariantsDeleted", {
        ids: input.ids,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedProductVariants, {
        hooks: [productVariantsDeleted],
    });
});
//# sourceMappingURL=delete-product-variants.js.map