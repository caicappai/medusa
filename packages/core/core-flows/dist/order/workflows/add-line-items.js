"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderLineItemsWorkflow = exports.addOrderLineItemsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const find_one_or_any_region_1 = require("../../cart/steps/find-one-or-any-region");
const find_or_create_customer_1 = require("../../cart/steps/find-or-create-customer");
const find_sales_channel_1 = require("../../cart/steps/find-sales-channel");
const validate_line_item_prices_1 = require("../../cart/steps/validate-line-item-prices");
const validate_variant_prices_1 = require("../../cart/steps/validate-variant-prices");
const prepare_line_item_data_1 = require("../../cart/utils/prepare-line-item-data");
const confirm_variant_inventory_1 = require("../../cart/workflows/confirm-variant-inventory");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const fields_1 = require("../utils/fields");
function prepareLineItems(data) {
    const items = (data.input.items ?? []).map((item) => {
        const variant = data.variants.find((v) => v.id === item.variant_id);
        const input = {
            item,
            variant: variant,
            unitPrice: item.unit_price,
            isTaxInclusive: item.is_tax_inclusive ??
                variant?.calculated_price?.is_calculated_price_tax_inclusive,
            isCustomPrice: (0, utils_1.isDefined)(item?.unit_price),
            taxLines: item.tax_lines || [],
            adjustments: item.adjustments || [],
        };
        if (variant && !input.unitPrice) {
            input.unitPrice = variant.calculated_price?.calculated_amount;
        }
        return (0, prepare_line_item_data_1.prepareLineItemData)(input);
    });
    return items;
}
exports.addOrderLineItemsWorkflowId = "order-add-line-items";
/**
 * This workflow adds line items to an order.
 */
exports.addOrderLineItemsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.addOrderLineItemsWorkflowId, (input) => {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "sales_channel_id",
            "region_id",
            "customer_id",
            "email",
            "currency_code",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.items ?? [])
            .map((item) => item.variant_id)
            .filter(Boolean);
    });
    const [salesChannel, region, customerData] = (0, workflows_sdk_1.parallelize)((0, find_sales_channel_1.findSalesChannelStep)({
        salesChannelId: order.sales_channel_id,
    }), (0, find_one_or_any_region_1.findOneOrAnyRegionStep)({
        regionId: order.region_id,
    }), (0, find_or_create_customer_1.findOrCreateCustomerStep)({
        customerId: order.customer_id,
        email: order.email,
    }));
    const pricingContext = (0, workflows_sdk_1.transform)({ input, region, customerData, order }, (data) => {
        if (!data.region) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Region not found");
        }
        return {
            currency_code: data.order.currency_code ?? data.region.currency_code,
            region_id: data.region.id,
            customer_id: data.customerData.customer?.id,
        };
    });
    const variants = (0, workflows_sdk_1.when)({ variantIds }, ({ variantIds }) => {
        return !!variantIds.length;
    }).then(() => {
        return (0, common_1.useRemoteQueryStep)({
            entry_point: "variants",
            fields: fields_1.productVariantsFields,
            variables: {
                id: variantIds,
                calculated_price: {
                    context: pricingContext,
                },
            },
        });
    });
    (0, validate_variant_prices_1.validateVariantPricesStep)({ variants });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: salesChannel.id,
            variants,
            items: input.items,
        },
    });
    const lineItems = (0, workflows_sdk_1.transform)({ input, variants }, prepareLineItems);
    (0, validate_line_item_prices_1.validateLineItemPricesStep)({ items: lineItems });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createOrderLineItemsStep)({
        items: lineItems,
    }));
});
//# sourceMappingURL=add-line-items.js.map