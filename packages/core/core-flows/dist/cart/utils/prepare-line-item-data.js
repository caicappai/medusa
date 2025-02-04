"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareLineItemData = prepareLineItemData;
exports.prepareTaxLinesData = prepareTaxLinesData;
exports.prepareAdjustmentsData = prepareAdjustmentsData;
const utils_1 = require("@medusajs/framework/utils");
function prepareLineItemData(data) {
    const { item, variant, cartId, taxLines, adjustments, isCustomPrice, unitPrice, isTaxInclusive, } = data;
    if (variant && !variant.product) {
        throw new Error("Variant does not have a product");
    }
    let compareAtUnitPrice = item?.compare_at_unit_price;
    const isSalePrice = variant?.calculated_price?.calculated_price?.price_list_type ===
        utils_1.PriceListType.SALE;
    if (!(0, utils_1.isPresent)(compareAtUnitPrice) &&
        isSalePrice &&
        !utils_1.MathBN.eq(variant.calculated_price?.original_amount, variant.calculated_price?.calculated_amount)) {
        compareAtUnitPrice = variant.calculated_price.original_amount;
    }
    // Note: If any of the items require shipping, we enable fulfillment
    // unless explicitly set to not require shipping by the item in the request
    const someInventoryRequiresShipping = variant?.inventory_items?.length
        ? variant.inventory_items.some((inventoryItem) => !!inventoryItem.inventory.requires_shipping)
        : true;
    const requiresShipping = (0, utils_1.isDefined)(item?.requires_shipping)
        ? item.requires_shipping
        : someInventoryRequiresShipping;
    let lineItem = {
        quantity: item?.quantity,
        title: variant?.title ?? item?.title,
        subtitle: variant?.product?.title ?? item?.subtitle,
        thumbnail: variant?.product?.thumbnail ?? item?.thumbnail,
        product_id: variant?.product?.id ?? item?.product_id,
        product_title: variant?.product?.title ?? item?.product_title,
        product_description: variant?.product?.description ?? item?.product_description,
        product_subtitle: variant?.product?.subtitle ?? item?.product_subtitle,
        product_type: variant?.product?.type?.value ?? item?.product_type ?? null,
        product_type_id: variant?.product?.type?.id ?? item?.product_type_id ?? null,
        product_collection: variant?.product?.collection?.title ?? item?.product_collection ?? null,
        product_handle: variant?.product?.handle ?? item?.product_handle,
        variant_id: variant?.id,
        variant_sku: variant?.sku ?? item?.variant_sku,
        variant_barcode: variant?.barcode ?? item?.variant_barcode,
        variant_title: variant?.title ?? item?.variant_title,
        variant_option_values: item?.variant_option_values,
        is_discountable: variant?.product?.discountable ?? item?.is_discountable,
        requires_shipping: requiresShipping,
        unit_price: unitPrice,
        compare_at_unit_price: compareAtUnitPrice,
        is_tax_inclusive: !!isTaxInclusive,
        metadata: item?.metadata ?? {},
    };
    if (isCustomPrice) {
        lineItem.is_custom_price = !!isCustomPrice;
    }
    if (taxLines) {
        lineItem.tax_lines = prepareTaxLinesData(taxLines);
    }
    if (adjustments) {
        lineItem.adjustments = prepareAdjustmentsData(adjustments);
    }
    if (cartId) {
        lineItem.cart_id = cartId;
    }
    return lineItem;
}
function prepareTaxLinesData(data) {
    return data.map((d) => ({
        description: d.description,
        tax_rate_id: d.tax_rate_id,
        code: d.code,
        rate: d.rate,
        provider_id: d.provider_id,
    }));
}
function prepareAdjustmentsData(data) {
    return data.map((d) => ({
        code: d.code,
        amount: d.amount,
        description: d.description,
        promotion_id: d.promotion_id,
        provider_id: d.promotion_id,
    }));
}
//# sourceMappingURL=prepare-line-item-data.js.map