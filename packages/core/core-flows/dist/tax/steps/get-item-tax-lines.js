"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemTaxLinesStep = exports.getItemTaxLinesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
function normalizeTaxModuleContext(orderOrCart, forceTaxCalculation, isReturn, shippingAddress) {
    const address = shippingAddress ?? orderOrCart.shipping_address;
    const shouldCalculateTax = forceTaxCalculation || orderOrCart.region?.automatic_taxes;
    if (!shouldCalculateTax) {
        return null;
    }
    if (forceTaxCalculation && !address?.country_code) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `country code is required to calculate taxes`);
    }
    if (!address?.country_code) {
        return null;
    }
    const customer = orderOrCart.customer && {
        id: orderOrCart.customer.id,
        email: orderOrCart.customer.email,
        customer_groups: orderOrCart.customer.groups?.map((g) => g.id) || [],
        metadata: orderOrCart.customer.metadata,
    };
    return {
        address: {
            country_code: address.country_code,
            province_code: address.province,
            address_1: address.address_1,
            address_2: address.address_2,
            city: address.city,
            postal_code: address.postal_code,
            metadata: address.metadata,
        },
        customer,
        is_return: isReturn ?? false,
    };
}
function normalizeLineItemsForTax(orderOrCart, items) {
    return items.map((item) => ({
        id: item.id,
        product_id: item.product_id,
        product_type_id: item.product_type_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        currency_code: orderOrCart.currency_code,
    }));
}
function normalizeLineItemsForShipping(orderOrCart, shippingMethods) {
    return shippingMethods.map((shippingMethod) => ({
        id: shippingMethod.id,
        shipping_option_id: shippingMethod.shipping_option_id,
        unit_price: shippingMethod.amount,
        currency_code: orderOrCart.currency_code,
    }));
}
exports.getItemTaxLinesStepId = "get-item-tax-lines";
/**
 * This step retrieves the tax lines for an order's line items and shipping methods.
 */
exports.getItemTaxLinesStep = (0, workflows_sdk_1.createStep)(exports.getItemTaxLinesStepId, async (data, { container }) => {
    const { orderOrCart, items = [], shipping_methods: shippingMethods = [], force_tax_calculation: forceTaxCalculation = false, is_return: isReturn = false, shipping_address: shippingAddress, } = data;
    const taxService = container.resolve(utils_1.Modules.TAX);
    const taxContext = normalizeTaxModuleContext(orderOrCart, forceTaxCalculation, isReturn, shippingAddress);
    const stepResponseData = {
        lineItemTaxLines: [],
        shippingMethodsTaxLines: [],
    };
    if (!taxContext) {
        return new workflows_sdk_1.StepResponse(stepResponseData);
    }
    if (items.length) {
        stepResponseData.lineItemTaxLines = (await taxService.getTaxLines(normalizeLineItemsForTax(orderOrCart, items), taxContext));
    }
    if (shippingMethods.length) {
        stepResponseData.shippingMethodsTaxLines = (await taxService.getTaxLines(normalizeLineItemsForShipping(orderOrCart, shippingMethods), taxContext));
    }
    return new workflows_sdk_1.StepResponse(stepResponseData);
});
//# sourceMappingURL=get-item-tax-lines.js.map