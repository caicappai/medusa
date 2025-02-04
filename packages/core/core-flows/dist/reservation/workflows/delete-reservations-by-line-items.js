"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReservationsByLineItemsWorkflow = exports.deleteReservationsByLineItemsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteReservationsByLineItemsWorkflowId = "delete-reservations-by-line-items";
/**
 * This workflow deletes reservations by their associated line items.
 */
exports.deleteReservationsByLineItemsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteReservationsByLineItemsWorkflowId, (input) => {
    return (0, steps_1.deleteReservationsByLineItemsStep)(input.ids);
});
//# sourceMappingURL=delete-reservations-by-line-items.js.map