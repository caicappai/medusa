"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilesWorkflow = exports.deleteFilesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteFilesWorkflowId = "delete-files";
/**
 * This workflow deletes one or more files.
 */
exports.deleteFilesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteFilesWorkflowId, (input) => {
    (0, steps_1.deleteFilesStep)(input.ids);
});
//# sourceMappingURL=delete-files.js.map