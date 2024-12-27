"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_workflow_1 = require("../../workflow/global-workflow");
const types_1 = require("../../transaction/types");
const workflow_manager_1 = require("../../workflow/workflow-manager");
const scheduler_1 = require("../../workflow/scheduler");
const mock_scheduler_storage_1 = require("../../__fixtures__/mock-scheduler-storage");
scheduler_1.WorkflowScheduler.setStorage(new mock_scheduler_storage_1.MockSchedulerStorage());
describe("WorkflowManager", () => {
    const container = {};
    let handlers;
    let flow;
    let asyncStepIdempotencyKey;
    beforeEach(() => {
        jest.resetAllMocks();
        workflow_manager_1.WorkflowManager.unregisterAll();
        handlers = new Map();
        handlers.set("foo", {
            invoke: jest.fn().mockResolvedValue({ done: true }),
            compensate: jest.fn(() => { }),
        });
        handlers.set("bar", {
            invoke: jest.fn().mockResolvedValue({ done: true }),
            compensate: jest.fn().mockResolvedValue({}),
        });
        handlers.set("broken", {
            invoke: jest.fn(() => {
                throw new Error("Step Failed");
            }),
            compensate: jest.fn().mockResolvedValue({ bar: 123, reverted: true }),
        });
        handlers.set("callExternal", {
            invoke: jest.fn(({ metadata }) => {
                asyncStepIdempotencyKey = metadata.idempotency_key;
            }),
        });
        workflow_manager_1.WorkflowManager.register("create-product", {
            action: "foo",
            next: {
                action: "bar",
            },
        }, handlers);
        workflow_manager_1.WorkflowManager.register("broken-delivery", {
            action: "foo",
            next: {
                action: "broken",
            },
        }, handlers);
        workflow_manager_1.WorkflowManager.register("deliver-product", {
            action: "foo",
            next: {
                action: "callExternal",
                async: true,
                noCompensation: true,
                next: {
                    action: "bar",
                },
            },
        }, handlers);
        flow = new global_workflow_1.GlobalWorkflow(container);
    });
    it("should return all registered workflows", () => {
        const wf = Object.keys(Object.fromEntries(workflow_manager_1.WorkflowManager.getWorkflows()));
        expect(wf).toEqual(["create-product", "broken-delivery", "deliver-product"]);
    });
    it("should begin a transaction and returns its final state", async () => {
        const transaction = await flow.run("create-product", "t-id", {
            input: 123,
        });
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(0);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.DONE);
    });
    it("should begin a transaction and revert it when fail", async () => {
        const transaction = await flow.run("broken-delivery", "t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("broken").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(1);
        expect(handlers.get("broken").compensate).toHaveBeenCalledTimes(1);
        expect(transaction.getState()).toBe(types_1.TransactionState.REVERTED);
    });
    it("should continue an asyncronous transaction after reporting a successful step", async () => {
        const transaction = await flow.run("deliver-product", "t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("callExternal").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.INVOKING);
        const continuation = await flow.registerStepSuccess("deliver-product", asyncStepIdempotencyKey, { ok: true });
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(continuation.getState()).toBe(types_1.TransactionState.DONE);
    });
    it("should revert an asyncronous transaction after reporting a failure step", async () => {
        const transaction = await flow.run("deliver-product", "t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("callExternal").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.INVOKING);
        const continuation = await flow.registerStepFailure("deliver-product", asyncStepIdempotencyKey, { ok: true });
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(handlers.get("bar").compensate).toHaveBeenCalledTimes(0);
        expect(continuation.getState()).toBe(types_1.TransactionState.REVERTED);
    });
    it("should update an existing global flow with a new step and a new handler", async () => {
        const definition = workflow_manager_1.WorkflowManager.getTransactionDefinition("create-product");
        definition.insertActionBefore("bar", "xor", { maxRetries: 3 });
        const additionalHandlers = new Map();
        additionalHandlers.set("xor", {
            invoke: jest.fn().mockResolvedValue({ done: true }),
            compensate: jest.fn().mockResolvedValue({}),
        });
        workflow_manager_1.WorkflowManager.update("create-product", definition, additionalHandlers);
        const transaction = await flow.run("create-product", "t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(additionalHandlers.get("xor").invoke).toHaveBeenCalledTimes(1);
        expect(transaction.getState()).toBe(types_1.TransactionState.DONE);
    });
});
//# sourceMappingURL=global-workflow.js.map