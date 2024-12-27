"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const orchestration_1 = require("@medusajs/orchestration");
const mock_scheduler_storage_1 = require("../__fixtures__/mock-scheduler-storage");
const job_loader_1 = require("../job-loader");
describe("register jobs", () => {
    orchestration_1.WorkflowScheduler.setStorage(new mock_scheduler_storage_1.MockSchedulerStorage());
    let jobLoader;
    beforeAll(() => {
        jobLoader = new job_loader_1.JobLoader((0, path_1.join)(__dirname, "../__fixtures__/plugin/jobs"));
    });
    it("registers jobs from plugins", async () => {
        await jobLoader.load();
        const workflow = orchestration_1.WorkflowManager.getWorkflow("job-summarize-orders");
        expect(workflow).toBeDefined();
        expect(workflow?.options.schedule).toEqual({
            cron: "* * * * * *",
            numberOfExecutions: 2,
        });
    });
});
//# sourceMappingURL=register-jobs.spec.js.map