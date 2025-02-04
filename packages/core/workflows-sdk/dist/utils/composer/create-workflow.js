"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorkflow = createWorkflow;
const orchestration_1 = require("@medusajs/orchestration");
const utils_1 = require("@medusajs/utils");
const ulid_1 = require("ulid");
const helper_1 = require("../../helper");
const create_step_1 = require("./create-step");
const proxy_1 = require("./helpers/proxy");
const step_response_1 = require("./helpers/step-response");
global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerContext] = null;
/**
 * This function creates a workflow with the provided name and a constructor function.
 * The constructor function builds the workflow from steps created by the {@link createStep} function.
 * The returned workflow is an exported workflow of type {@link ReturnWorkflow}, meaning it's not executed right away. To execute it,
 * invoke the exported workflow, then run its `run` method.
 *
 * @typeParam TData - The type of the input passed to the composer function.
 * @typeParam TResult - The type of the output returned by the composer function.
 * @typeParam THooks - The type of hooks defined in the workflow.
 *
 * @returns The created workflow. You can later execute the workflow by invoking it, then using its `run` method.
 *
 * @example
 * import {
 *   createWorkflow,
 *   WorkflowResponse
 * } from "@medusajs/framework/workflows-sdk"
 * import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
 * import {
 *   createProductStep,
 *   getProductStep,
 *   createPricesStep
 * } from "./steps"
 *
 * interface WorkflowInput {
 *  title: string
 * }
 *
 * const myWorkflow = createWorkflow(
 *   "my-workflow",
 *   (input: WorkflowInput) => {
 *    // Everything here will be executed and resolved later
 *    // during the execution. Including the data access.
 *
 *     const product = createProductStep(input)
 *     const prices = createPricesStep(product)
 *     return new WorkflowResponse(getProductStep(product.id))
 *   }
 * )
 *
 * export async function GET(
 *   req: MedusaRequest,
 *   res: MedusaResponse
 * ) {
 *   const { result: product } = await myWorkflow(req.scope)
 *     .run({
 *       input: {
 *         title: "Shirt"
 *       }
 *     })
 *
 *   res.json({
 *     product
 *   })
 * }
 */
function createWorkflow(
/**
 * The name of the workflow or its configuration.
 */
nameOrConfig, 
/**
 * The constructor function that is executed when the `run` method in {@link ReturnWorkflow} is used.
 * The function can't be an arrow function or an asynchronus function. It also can't directly manipulate data.
 * You'll have to use the {@link transform} function if you need to directly manipulate data.
 */
composer) {
    const fileSourcePath = (0, utils_1.getCallerFilePath)();
    const name = (0, utils_1.isString)(nameOrConfig) ? nameOrConfig : nameOrConfig.name;
    const options = (0, utils_1.isString)(nameOrConfig) ? {} : nameOrConfig;
    const handlers = new Map();
    let newWorkflow = false;
    if (!orchestration_1.WorkflowManager.getWorkflow(name)) {
        newWorkflow = true;
        orchestration_1.WorkflowManager.register(name, undefined, handlers, options);
    }
    const context = {
        __type: utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerContext,
        workflowId: name,
        flow: orchestration_1.WorkflowManager.getEmptyTransactionDefinition(),
        isAsync: false,
        handlers,
        hooks_: {
            declared: [],
            registered: [],
        },
        hooksCallback_: {},
        hookBinder: (name, fn) => {
            context.hooks_.declared.push(name);
            context.hooksCallback_[name] = fn.bind(context)();
        },
        stepBinder: (fn) => {
            return fn.bind(context)();
        },
        parallelizeBinder: (fn) => {
            return fn.bind(context)();
        },
    };
    global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerContext] = context;
    const inputPlaceHolder = (0, proxy_1.proxify)({
        __type: utils_1.OrchestrationUtils.SymbolInputReference,
        __step__: "",
        config: () => {
            // TODO: config default value?
            throw new Error("Config is not available for the input object.");
        },
    });
    const returnedStep = composer.apply(context, [inputPlaceHolder]);
    delete global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerContext];
    if (newWorkflow) {
        orchestration_1.WorkflowManager.update(name, context.flow, handlers, options);
    }
    else {
        orchestration_1.WorkflowManager.register(name, context.flow, handlers, options);
    }
    const workflow = (0, helper_1.exportWorkflow)(name, returnedStep, {
        wrappedInput: true,
        sourcePath: fileSourcePath,
    });
    const mainFlow = (container) => {
        const workflow_ = workflow(container);
        const expandedFlow = workflow_;
        expandedFlow.config = (config) => {
            workflow_.setOptions(config);
        };
        return expandedFlow;
    };
    mainFlow.hooks = {};
    for (const hook of context.hooks_.declared) {
        mainFlow.hooks[hook] = context.hooksCallback_[hook].bind(context);
    }
    mainFlow.getName = () => name;
    mainFlow.run = mainFlow().run;
    mainFlow.runAsStep = ({ input, }) => {
        const step = (0, create_step_1.createStep)({
            name: `${name}-as-step`,
            async: context.isAsync,
            nested: context.isAsync, // if async we flag this is a nested transaction
        }, async (stepInput, stepContext) => {
            const { container, ...sharedContext } = stepContext;
            const transaction = await workflow.run({
                input: stepInput,
                container,
                context: {
                    ...sharedContext,
                    transactionId: step.__step__ + "-" + (stepContext.transactionId ?? (0, ulid_1.ulid)()),
                    parentStepIdempotencyKey: stepContext.idempotencyKey,
                },
            });
            const { result, transaction: flowTransaction } = transaction;
            if (!context.isAsync || flowTransaction.hasFinished()) {
                return new step_response_1.StepResponse(result, transaction);
            }
            return;
        }, async (transaction, { container }) => {
            if (!transaction) {
                return;
            }
            await workflow(container).cancel(transaction);
        })(input);
        return step;
    };
    return mainFlow;
}
//# sourceMappingURL=create-workflow.js.map