"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertShippingOptionsStep = exports.upsertShippingOptionsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.upsertShippingOptionsStepId = "create-shipping-options-step";
/**
 * This step creates or updates shipping options.
 */
exports.upsertShippingOptionsStep = (0, workflows_sdk_1.createStep)(exports.upsertShippingOptionsStepId, async (input, { container }) => {
    if (!input?.length) {
        return new workflows_sdk_1.StepResponse([], {});
    }
    const fulfillmentService = container.resolve(utils_1.Modules.FULFILLMENT);
    const toUpdate = [];
    input.forEach((inputItem) => {
        if (!!inputItem.id) {
            return toUpdate.push(inputItem);
        }
        return;
    });
    let toUpdatePreviousData = [];
    if (toUpdate.length) {
        const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)(toUpdate);
        toUpdatePreviousData = await fulfillmentService.listShippingOptions({
            id: toUpdate.map((s) => s.id),
        }, {
            select: selects,
            relations,
        });
    }
    const upsertedShippingOptions = await fulfillmentService.upsertShippingOptions(input);
    const upsertedShippingOptionIds = upsertedShippingOptions.map((s) => s.id);
    const updatedIds = toUpdate.map((s) => s.id);
    return new workflows_sdk_1.StepResponse(upsertedShippingOptions, {
        updatedPreviousData: toUpdatePreviousData,
        createdIds: (0, utils_1.arrayDifference)(upsertedShippingOptionIds, updatedIds),
    });
}, async (shippingOptionIds, { container }) => {
    if (!shippingOptionIds?.updatedPreviousData?.length &&
        !shippingOptionIds?.createdIds?.length) {
        return;
    }
    const fulfillmentService = container.resolve(utils_1.Modules.FULFILLMENT);
    if (shippingOptionIds.updatedPreviousData.length) {
        await fulfillmentService.upsertShippingOptions(shippingOptionIds.updatedPreviousData);
    }
    if (shippingOptionIds.createdIds.length) {
        await fulfillmentService.deleteShippingOptions(shippingOptionIds.createdIds);
    }
});
//# sourceMappingURL=upsert-shipping-options.js.map