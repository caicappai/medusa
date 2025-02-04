"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTaxLinesForItemsStep = exports.setTaxLinesForItemsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.setTaxLinesForItemsStepId = "set-tax-lines-for-items";
/**
 * This step sets the tax lines of shipping methods and line items in a cart.
 */
exports.setTaxLinesForItemsStep = (0, workflows_sdk_1.createStep)(exports.setTaxLinesForItemsStepId, async (data, { container }) => {
    const { cart, item_tax_lines, shipping_tax_lines } = data;
    const cartService = container.resolve(utils_1.Modules.CART);
    const existingShippingMethodTaxLines = await cartService.listShippingMethodTaxLines({
        shipping_method_id: shipping_tax_lines.map((t) => t.shipping_line_id),
    });
    const existingLineItemTaxLines = await cartService.listLineItemTaxLines({
        item_id: item_tax_lines.map((t) => t.line_item_id),
    });
    const itemsTaxLinesData = normalizeItemTaxLinesForCart(item_tax_lines);
    await cartService.setLineItemTaxLines(cart.id, itemsTaxLinesData);
    const shippingTaxLinesData = normalizeShippingTaxLinesForCart(shipping_tax_lines);
    await cartService.setShippingMethodTaxLines(cart.id, shippingTaxLinesData);
    return new workflows_sdk_1.StepResponse(null, {
        cart,
        existingLineItemTaxLines,
        existingShippingMethodTaxLines,
    });
}, async (revertData, { container }) => {
    if (!revertData) {
        return;
    }
    const { cart, existingLineItemTaxLines, existingShippingMethodTaxLines } = revertData;
    const cartService = container.resolve(utils_1.Modules.CART);
    if (existingLineItemTaxLines) {
        await cartService.setLineItemTaxLines(cart.id, existingLineItemTaxLines.map((taxLine) => ({
            description: taxLine.description,
            tax_rate_id: taxLine.tax_rate_id,
            code: taxLine.code,
            rate: taxLine.rate,
            provider_id: taxLine.provider_id,
            item_id: taxLine.item_id,
        })));
    }
    await cartService.setShippingMethodTaxLines(cart.id, existingShippingMethodTaxLines.map((taxLine) => ({
        description: taxLine.description,
        tax_rate_id: taxLine.tax_rate_id,
        code: taxLine.code,
        rate: taxLine.rate,
        provider_id: taxLine.provider_id,
        shipping_method_id: taxLine.shipping_method_id,
    })));
});
function normalizeItemTaxLinesForCart(taxLines) {
    return taxLines.map((taxLine) => ({
        description: taxLine.name,
        tax_rate_id: taxLine.rate_id,
        code: taxLine.code,
        rate: taxLine.rate,
        provider_id: taxLine.provider_id,
        item_id: taxLine.line_item_id,
    }));
}
function normalizeShippingTaxLinesForCart(taxLines) {
    return taxLines.map((taxLine) => ({
        description: taxLine.name,
        tax_rate_id: taxLine.rate_id,
        code: taxLine.code,
        rate: taxLine.rate,
        provider_id: taxLine.provider_id,
        shipping_method_id: taxLine.shipping_line_id,
    }));
}
//# sourceMappingURL=set-tax-lines-for-items.js.map