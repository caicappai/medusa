"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_step_1 = require("../create-step");
const create_workflow_1 = require("../create-workflow");
const helpers_1 = require("../helpers");
const workflow_response_1 = require("../helpers/workflow-response");
const transform_1 = require("../transform");
const when_1 = require("../when");
let count = 1;
const getNewWorkflowId = () => `workflow-${count++}`;
describe("Workflow composer", () => {
    describe("running sub workflows", () => {
        it("should succeed", async function () {
            const step1 = (0, create_step_1.createStep)("step1", async (_, context) => {
                return new helpers_1.StepResponse({ result: "step1" });
            });
            const step2 = (0, create_step_1.createStep)("step2", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const step3 = (0, create_step_1.createStep)("step3", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const subWorkflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                step1();
                return new workflow_response_1.WorkflowResponse(step2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function () {
                const subWorkflowRes = subWorkflow.runAsStep({
                    input: "hi from outside",
                });
                return new workflow_response_1.WorkflowResponse(step3(subWorkflowRes.result));
            });
            const { result } = await workflow.run({ input: {} });
            expect(result).toEqual({ result: "hi from outside" });
        });
        it("should skip step if condition is false", async function () {
            const step1 = (0, create_step_1.createStep)("step1", async (_, context) => {
                return new helpers_1.StepResponse({ result: "step1" });
            });
            const step2 = (0, create_step_1.createStep)("step2", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const step3 = (0, create_step_1.createStep)("step3", async (input, context) => {
                return new helpers_1.StepResponse({ result: input ?? "default response" });
            });
            const subWorkflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                step1();
                return new workflow_response_1.WorkflowResponse(step2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                const subWorkflowRes = (0, when_1.when)({ input }, ({ input }) => {
                    return input.callSubFlow;
                }).then(() => {
                    return subWorkflow.runAsStep({
                        input: "hi from outside",
                    });
                });
                return new workflow_response_1.WorkflowResponse(step3(subWorkflowRes.result));
            });
            const { result } = await workflow.run({ input: { callSubFlow: false } });
            expect(result).toEqual({ result: "default response" });
        });
        it("should not skip step if condition is true", async function () {
            const step1 = (0, create_step_1.createStep)("step1", async (_, context) => {
                return new helpers_1.StepResponse({ result: "step1" });
            });
            const step2 = (0, create_step_1.createStep)("step2", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const step3 = (0, create_step_1.createStep)("step3", async (input, context) => {
                return new helpers_1.StepResponse({ result: input ?? "default response" });
            });
            const subWorkflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                step1();
                return new workflow_response_1.WorkflowResponse(step2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                const subWorkflowRes = (0, when_1.when)({ input }, ({ input }) => {
                    return input.callSubFlow;
                }).then(() => {
                    return subWorkflow.runAsStep({
                        input: "hi from outside",
                    });
                });
                return new workflow_response_1.WorkflowResponse(step3(subWorkflowRes.result));
            });
            const { result } = await workflow.run({
                input: { callSubFlow: true },
            });
            expect(result).toEqual({ result: "hi from outside" });
            const { result: res2 } = await workflow.run({
                input: { callSubFlow: false },
            });
            expect(res2).toEqual({ result: "default response" });
        });
        it("should not return value if when condition is false", async function () {
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                const value = (0, when_1.when)({ input }, ({ input }) => {
                    return input.ret;
                }).then(() => {
                    return { hasValue: true };
                });
                return new workflow_response_1.WorkflowResponse(value);
            });
            const { result } = await workflow.run({
                input: { ret: false },
            });
            expect(result).toEqual(undefined);
            const { result: res2 } = await workflow.run({
                input: { ret: true },
            });
            expect(res2).toEqual({ hasValue: true });
        });
        it("should revert the workflow and sub workflow on failure", async function () {
            const step1Mock = jest.fn();
            const step1 = (0, create_step_1.createStep)("step1", async () => {
                return new helpers_1.StepResponse({ result: "step1" });
            }, step1Mock);
            const step2Mock = jest.fn();
            const step2 = (0, create_step_1.createStep)("step2", async (input) => {
                return new helpers_1.StepResponse({ result: input });
            }, step2Mock);
            const step3Mock = jest.fn();
            const step3 = (0, create_step_1.createStep)("step3", async () => {
                return new helpers_1.StepResponse();
            }, step3Mock);
            const step4WithError = (0, create_step_1.createStep)("step4", async () => {
                throw new Error("Step4 failed");
            });
            const subWorkflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function (input) {
                step1();
                return new workflow_response_1.WorkflowResponse(step2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function () {
                step3();
                const subWorkflowRes = subWorkflow.runAsStep({
                    input: "hi from outside",
                });
                step4WithError();
                return new workflow_response_1.WorkflowResponse(subWorkflowRes);
            });
            const { errors } = await workflow.run({ throwOnError: false });
            expect(errors).toEqual([
                expect.objectContaining({
                    error: expect.objectContaining({
                        message: "Step4 failed",
                    }),
                }),
            ]);
            expect(step1Mock).toHaveBeenCalledTimes(1);
            expect(step2Mock).toHaveBeenCalledTimes(1);
            expect(step3Mock).toHaveBeenCalledTimes(1);
        });
        it("should succeed and pass down the transaction id and event group id when provided from the context", async function () {
            let parentContext, childContext;
            const childWorkflowStep1 = (0, create_step_1.createStep)("step1", async (_, context) => {
                childContext = context;
                return new helpers_1.StepResponse({ result: "step1" });
            });
            const childWorkflowStep2 = (0, create_step_1.createStep)("step2", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const step1 = (0, create_step_1.createStep)("step3", async (input, context) => {
                parentContext = context;
                return new helpers_1.StepResponse({ result: input });
            });
            const wfId = getNewWorkflowId();
            const subWorkflow = (0, create_workflow_1.createWorkflow)(wfId, function (input) {
                childWorkflowStep1();
                return new workflow_response_1.WorkflowResponse(childWorkflowStep2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function () {
                const subWorkflowRes = subWorkflow.runAsStep({
                    input: "hi from outside",
                });
                return new workflow_response_1.WorkflowResponse(step1(subWorkflowRes.result));
            });
            const { result } = await workflow.run({
                input: {},
                context: {
                    eventGroupId: "eventGroupId",
                    transactionId: "transactionId",
                },
            });
            expect(result).toEqual({ result: "hi from outside" });
            expect(parentContext.transactionId).toEqual(expect.any(String));
            expect(childContext.transactionId).toEqual(wfId + "-as-step-" + parentContext.transactionId);
            expect(parentContext.eventGroupId).toEqual("eventGroupId");
            expect(parentContext.eventGroupId).toEqual(childContext.eventGroupId);
        });
        it("should succeed and pass down the transaction id and event group id when not provided from the context", async function () {
            let parentContext, childContext;
            const childWorkflowStep1 = (0, create_step_1.createStep)("step1", async (_, context) => {
                childContext = context;
                return new helpers_1.StepResponse({ result: "step1" });
            });
            const childWorkflowStep2 = (0, create_step_1.createStep)("step2", async (input, context) => {
                return new helpers_1.StepResponse({ result: input });
            });
            const step1 = (0, create_step_1.createStep)("step3", async (input, context) => {
                parentContext = context;
                return new helpers_1.StepResponse({ result: input });
            });
            const wfId = getNewWorkflowId();
            const subWorkflow = (0, create_workflow_1.createWorkflow)(wfId, function (input) {
                childWorkflowStep1();
                return new workflow_response_1.WorkflowResponse(childWorkflowStep2(input));
            });
            const workflow = (0, create_workflow_1.createWorkflow)(getNewWorkflowId(), function () {
                const subWorkflowRes = subWorkflow.runAsStep({
                    input: "hi from outside",
                });
                return new workflow_response_1.WorkflowResponse(step1(subWorkflowRes.result));
            });
            const { result } = await workflow.run({
                input: {},
            });
            expect(result).toEqual({ result: "hi from outside" });
            expect(parentContext.transactionId).toBeTruthy();
            expect(childContext.transactionId).toEqual(wfId + "-as-step-" + parentContext.transactionId);
            expect(parentContext.eventGroupId).toBeTruthy();
            expect(parentContext.eventGroupId).toEqual(childContext.eventGroupId);
        });
    });
    it("should not throw an unhandled error on failed transformer resolution after a step fail, but should rather push the errors in the errors result", async function () {
        const step1 = (0, create_step_1.createStep)("step1", async () => {
            return new helpers_1.StepResponse({ result: "step1" });
        });
        const step2 = (0, create_step_1.createStep)("step2", async () => {
            throw new Error("step2 failed");
        });
        const work = (0, create_workflow_1.createWorkflow)("id", () => {
            step1();
            const resStep2 = step2();
            const transformedData = (0, transform_1.transform)({ data: resStep2 }, (data) => {
                // @ts-expect-error "Since we are reading result from undefined"
                return { result: data.data.result };
            });
            return new workflow_response_1.WorkflowResponse((0, transform_1.transform)({ data: transformedData, resStep2 }, (data) => {
                return { result: data.data };
            }));
        });
        const { errors } = await work.run({ input: {}, throwOnError: false });
        expect(errors).toEqual([
            {
                action: "step2",
                handlerType: "invoke",
                error: expect.objectContaining({
                    message: "step2 failed",
                }),
            },
            expect.objectContaining({
                message: "Cannot read properties of undefined (reading 'result')",
            }),
        ]);
    });
});
//# sourceMappingURL=index.spec.js.map