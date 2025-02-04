"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSalesChannelsWorkflow = exports.createSalesChannelsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const create_sales_channels_1 = require("../steps/create-sales-channels");
exports.createSalesChannelsWorkflowId = "create-sales-channels";
/**
 * This workflow creates one or more sales channels.
 */
exports.createSalesChannelsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createSalesChannelsWorkflowId, (input) => {
    const createdSalesChannels = (0, create_sales_channels_1.createSalesChannelsStep)({
        data: input.salesChannelsData,
    });
    const salesChannelsIdEvents = (0, workflows_sdk_1.transform)({ createdSalesChannels }, ({ createdSalesChannels }) => {
        return createdSalesChannels.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.SalesChannelWorkflowEvents.CREATED,
        data: salesChannelsIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(createdSalesChannels);
});
//# sourceMappingURL=create-sales-channels.js.map