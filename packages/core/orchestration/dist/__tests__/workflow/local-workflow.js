"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_scheduler_storage_1 = require("../../__fixtures__/mock-scheduler-storage");
const types_1 = require("../../transaction/types");
const local_workflow_1 = require("../../workflow/local-workflow");
const scheduler_1 = require("../../workflow/scheduler");
const workflow_manager_1 = require("../../workflow/workflow-manager");
scheduler_1.WorkflowScheduler.setStorage(new mock_scheduler_storage_1.MockSchedulerStorage());
describe("WorkflowManager", () => {
    const container = {};
    let handlers;
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
    });
    it("should return all registered workflows", () => {
        const wf = Object.keys(Object.fromEntries(workflow_manager_1.WorkflowManager.getWorkflows()));
        expect(wf).toEqual(["create-product", "broken-delivery", "deliver-product"]);
    });
    it("should throw when registering a workflow with an existing id and different definition", () => {
        const exec = () => workflow_manager_1.WorkflowManager.register("create-product", {
            action: "foo",
            next: {
                action: "bar",
                next: {
                    action: "xor",
                },
            },
        }, handlers);
        expect(exec).toThrowError(`Workflow with id "create-product" and step definition already exists.`);
    });
    it("should not throw when registering a workflow with an existing id but identical definition", () => {
        let err;
        try {
            workflow_manager_1.WorkflowManager.register("create-product", {
                action: "foo",
                next: {
                    action: "bar",
                },
            }, handlers);
        }
        catch (e) {
            err = e;
        }
        expect(err).not.toBeDefined();
    });
    it("should begin a transaction and returns its final state", async () => {
        const flow = new local_workflow_1.LocalWorkflow("create-product", container);
        const transaction = await flow.run("t-id", {
            input: 123,
        });
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(0);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.DONE);
    });
    it("should begin a transaction and revert it when fail", async () => {
        const flow = new local_workflow_1.LocalWorkflow("broken-delivery", container);
        const transaction = await flow.run("t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("broken").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(1);
        expect(handlers.get("broken").compensate).toHaveBeenCalledTimes(1);
        expect(transaction.getState()).toBe(types_1.TransactionState.REVERTED);
    });
    it("should continue an asyncronous transaction after reporting a successful step", async () => {
        const flow = new local_workflow_1.LocalWorkflow("deliver-product", container);
        const transaction = await flow.run("t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("callExternal").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.INVOKING);
        const continuation = await flow.registerStepSuccess(asyncStepIdempotencyKey, { ok: true });
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(continuation.getState()).toBe(types_1.TransactionState.DONE);
    });
    it("should revert an asyncronous transaction after reporting a failure step", async () => {
        const flow = new local_workflow_1.LocalWorkflow("deliver-product", container);
        const transaction = await flow.run("t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("callExternal").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(transaction.getState()).toBe(types_1.TransactionState.INVOKING);
        const continuation = await flow.registerStepFailure(asyncStepIdempotencyKey, { ok: true });
        expect(handlers.get("foo").compensate).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(0);
        expect(handlers.get("bar").compensate).toHaveBeenCalledTimes(0);
        expect(continuation.getState()).toBe(types_1.TransactionState.REVERTED);
    });
    it("should update a flow with a new step and a new handler", async () => {
        const flow = new local_workflow_1.LocalWorkflow("create-product", container);
        const additionalHandler = {
            invoke: jest.fn().mockResolvedValue({ done: true }),
            compensate: jest.fn().mockResolvedValue({}),
        };
        flow.insertActionBefore("bar", "xor", additionalHandler, { maxRetries: 3 });
        const transaction = await flow.run("t-id");
        expect(handlers.get("foo").invoke).toHaveBeenCalledTimes(1);
        expect(handlers.get("bar").invoke).toHaveBeenCalledTimes(1);
        expect(additionalHandler.invoke).toHaveBeenCalledTimes(1);
        expect(transaction.getState()).toBe(types_1.TransactionState.DONE);
        expect(workflow_manager_1.WorkflowManager.getWorkflow("create-product")?.handlers_.has("xor")).toEqual(false);
    });
    it("should return the final flow definition when calling getFlow()", async () => {
        const flow = new local_workflow_1.LocalWorkflow("deliver-product", container);
        expect(flow.getFlow()).toEqual({
            action: "foo",
            next: {
                action: "callExternal",
                async: true,
                noCompensation: true,
                next: { action: "bar" },
            },
        });
    });
});
//# sourceMappingURL=local-workflow.js.map