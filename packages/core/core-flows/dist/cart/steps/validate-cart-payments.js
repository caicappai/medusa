"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartPaymentsStep = exports.validateCartPaymentsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateCartPaymentsStepId = "validate-cart-payments";
/**
 * This step validates a cart's payment sessions. Their status must
 * be `pending` or `requires_more`.
 */
exports.validateCartPaymentsStep = (0, workflows_sdk_1.createStep)(exports.validateCartPaymentsStepId, async (data) => {
    const { cart: { payment_collection: paymentCollection }, } = data;
    if (!(0, utils_1.isPresent)(paymentCollection)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Payment collection has not been initiated for cart`);
    }
    // We check if any of these payment sessions are present in the cart
    // If not, we throw an error for the consumer to provide a processable payment session
    const processablePaymentStatuses = [
        utils_1.PaymentSessionStatus.PENDING,
        utils_1.PaymentSessionStatus.REQUIRES_MORE,
        utils_1.PaymentSessionStatus.AUTHORIZED, // E.g. payment was authorized, but the cart was not completed
    ];
    const paymentsToProcess = paymentCollection.payment_sessions?.filter((ps) => processablePaymentStatuses.includes(ps.status));
    if (!paymentsToProcess?.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Payment sessions are required to complete cart`);
    }
    return new workflows_sdk_1.StepResponse(paymentsToProcess);
});
//# sourceMappingURL=validate-cart-payments.js.map