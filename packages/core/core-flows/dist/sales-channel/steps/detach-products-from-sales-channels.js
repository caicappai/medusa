"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detachProductsFromSalesChannelsStep = exports.detachProductsFromSalesChannelsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.detachProductsFromSalesChannelsStepId = "detach-products-from-sales-channels-step";
/**
 * This step dismisses links between product and sales channel records.
 */
exports.detachProductsFromSalesChannelsStep = (0, workflows_sdk_1.createStep)(exports.detachProductsFromSalesChannelsStepId, async (input, { container }) => {
    if (!input.links?.length) {
        return new workflows_sdk_1.StepResponse(void 0, []);
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const links = input.links.map((link) => {
        return {
            [utils_1.Modules.PRODUCT]: {
                product_id: link.product_id,
            },
            [utils_1.Modules.SALES_CHANNEL]: {
                sales_channel_id: link.sales_channel_id,
            },
        };
    });
    await remoteLink.dismiss(links);
    return new workflows_sdk_1.StepResponse(void 0, links);
}, async (links, { container }) => {
    if (!links?.length) {
        return;
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create(links);
});
//# sourceMappingURL=detach-products-from-sales-channels.js.map