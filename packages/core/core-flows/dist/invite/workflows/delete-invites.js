"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInvitesWorkflow = exports.deleteInvitesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.deleteInvitesWorkflowId = "delete-invites-workflow";
/**
 * This workflow deletes one or more invites.
 */
exports.deleteInvitesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteInvitesWorkflowId, (input) => {
    (0, steps_1.deleteInvitesStep)(input.ids);
    const invitesIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.InviteWorkflowEvents.DELETED,
        data: invitesIdEvents,
    });
});
//# sourceMappingURL=delete-invites.js.map