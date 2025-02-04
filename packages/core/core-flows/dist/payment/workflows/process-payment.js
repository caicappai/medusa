"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPaymentWorkflow = exports.processPaymentWorkflowId = void 0;
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const complete_cart_1 = require("../../cart/workflows/complete-cart");
const steps_1 = require("../steps");
const capture_payment_1 = require("./capture-payment");
const common_1 = require("../../common");
exports.processPaymentWorkflowId = "process-payment-workflow";
exports.processPaymentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.processPaymentWorkflowId, (input) => {
    const paymentData = (0, common_1.useQueryGraphStep)({
        entity: "payment",
        fields: ["id"],
        filters: { payment_session_id: input.data?.session_id },
    }).config({
        name: "payment-query",
    });
    const paymentSessionResult = (0, common_1.useQueryGraphStep)({
        entity: "payment_session",
        fields: ["payment_collection_id"],
        filters: { id: input.data?.session_id },
    }).config({
        name: "payment-session-query",
    });
    const cartPaymentCollection = (0, common_1.useQueryGraphStep)({
        entity: "cart_payment_collection",
        fields: ["cart_id"],
        filters: {
            payment_collection_id: paymentSessionResult.data[0].payment_collection_id,
        },
    }).config({
        name: "cart-payment-query",
    });
    (0, workflows_sdk_1.when)({ cartPaymentCollection }, ({ cartPaymentCollection }) => {
        return !!cartPaymentCollection.data.length;
    }).then(() => {
        complete_cart_1.completeCartWorkflow
            .runAsStep({
            input: {
                id: cartPaymentCollection.data[0].cart_id,
            },
        })
            .config({
            continueOnPermanentFailure: true, // Continue payment processing even if cart completion fails
        });
    });
    (0, workflows_sdk_1.when)({ input }, ({ input }) => {
        return (input.action === utils_1.PaymentActions.SUCCESSFUL && !!paymentData.data.length);
    }).then(() => {
        capture_payment_1.capturePaymentWorkflow.runAsStep({
            input: {
                payment_id: paymentData.data[0].id,
                amount: input.data?.amount,
            },
        });
    });
    (0, workflows_sdk_1.when)({ input }, ({ input }) => {
        // Authorize payment session if no Cart is linked to the payment
        // When associated with a Cart, the complete cart workflow will handle the authorization
        return (!cartPaymentCollection.data.length &&
            input.action === utils_1.PaymentActions.AUTHORIZED &&
            !!input.data?.session_id);
    }).then(() => {
        (0, steps_1.authorizePaymentSessionStep)({
            id: input.data.session_id,
            context: {},
        });
    });
});
//# sourceMappingURL=process-payment.js.map