"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const workflow_loader_1 = require("../workflow-loader");
const orchestration_1 = require("@medusajs/orchestration");
const order_notifier_1 = require("../__fixtures__/workflows/order-notifier");
const product_updater_1 = require("../__fixtures__/workflows/deep-workflows/product-updater");
describe("WorkflowLoader", () => {
    const rootDir = (0, path_1.join)(__dirname, "../__fixtures__", "workflows");
    beforeAll(async () => {
        await new workflow_loader_1.WorkflowLoader(rootDir).load();
    });
    it("should register each workflow in the '/workflows' folder and sub folder", async () => {
        const registeredWorkflows = orchestration_1.WorkflowManager.getWorkflows();
        expect(registeredWorkflows.size).toBe(2);
        expect(registeredWorkflows.has(order_notifier_1.orderWorkflowId)).toBe(true);
        expect(registeredWorkflows.has(product_updater_1.productWorkflowId)).toBe(true);
    });
});
//# sourceMappingURL=index.spec.js.map