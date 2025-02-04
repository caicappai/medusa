"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLineItemInCartWorkflow = exports.updateLineItemInCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const steps_1 = require("../../line-item/steps");
const validate_cart_1 = require("../steps/validate-cart");
const validate_variant_prices_1 = require("../steps/validate-variant-prices");
const fields_1 = require("../utils/fields");
const confirm_variant_inventory_1 = require("./confirm-variant-inventory");
const refresh_cart_items_1 = require("./refresh-cart-items");
const cartFields = fields_1.cartFieldsForPricingContext.concat(["items.*"]);
exports.updateLineItemInCartWorkflowId = "update-line-item-in-cart";
/**
 * This workflow updates a cart's line item.
 */
exports.updateLineItemInCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateLineItemInCartWorkflowId, (input) => {
    const cartQuery = (0, common_1.useQueryGraphStep)({
        entity: "cart",
        filters: { id: input.cart_id },
        fields: cartFields,
        options: { throwIfKeyNotFound: true },
    }).config({ name: "get-cart" });
    const cart = (0, workflows_sdk_1.transform)({ cartQuery }, ({ cartQuery }) => cartQuery.data[0]);
    const item = (0, workflows_sdk_1.transform)({ cart, input }, ({ cart, input }) => {
        return cart.items.find((i) => i.id === input.item_id);
    });
    (0, validate_cart_1.validateCartStep)({ cart });
    const variantIds = (0, workflows_sdk_1.transform)({ item }, ({ item }) => {
        return [item.variant_id].filter(Boolean);
    });
    const variants = (0, workflows_sdk_1.when)({ variantIds }, ({ variantIds }) => {
        return !!variantIds.length;
    }).then(() => {
        return (0, use_remote_query_1.useRemoteQueryStep)({
            entry_point: "variants",
            fields: fields_1.productVariantsFields,
            variables: {
                id: variantIds,
                calculated_price: {
                    context: cart,
                },
            },
        }).config({ name: "fetch-variants" });
    });
    (0, validate_variant_prices_1.validateVariantPricesStep)({ variants });
    const items = (0, workflows_sdk_1.transform)({ item }, ({ item }) => {
        return [item];
    });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: cart.sales_channel_id,
            variants,
            items,
        },
    });
    const lineItemUpdate = (0, workflows_sdk_1.transform)({ input, variants, item }, (data) => {
        const variant = data.variants?.[0] ?? undefined;
        const item = data.item;
        const updateData = {
            ...data.input.update,
            unit_price: (0, utils_1.isDefined)(data.input.update.unit_price)
                ? data.input.update.unit_price
                : item.unit_price,
            is_custom_price: (0, utils_1.isDefined)(data.input.update.unit_price)
                ? true
                : item.is_custom_price,
            is_tax_inclusive: item.is_tax_inclusive ||
                variant?.calculated_price?.is_calculated_price_tax_inclusive,
        };
        if (variant && !updateData.is_custom_price) {
            updateData.unit_price = variant.calculated_price.calculated_amount;
        }
        if (!(0, utils_1.isDefined)(updateData.unit_price)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Line item ${item.title} has no unit price`);
        }
        return {
            data: updateData,
            selector: {
                id: data.input.item_id,
            },
        };
    });
    (0, steps_1.updateLineItemsStepWithSelector)(lineItemUpdate);
    refresh_cart_items_1.refreshCartItemsWorkflow.runAsStep({
        input: { cart_id: input.cart_id },
    });
});
//# sourceMappingURL=update-line-item-in-cart.js.map