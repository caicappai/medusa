"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const api_key_1 = require("./api-key");
const campaign_1 = require("./campaign");
const claim_1 = require("./claim");
const currency_1 = require("./currency");
const customer_1 = require("./customer");
const customer_group_1 = require("./customer-group");
const exchange_1 = require("./exchange");
const fulfillment_1 = require("./fulfillment");
const fulfillment_provider_1 = require("./fulfillment-provider");
const fulfillment_set_1 = require("./fulfillment-set");
const inventory_item_1 = require("./inventory-item");
const invite_1 = require("./invite");
const notification_1 = require("./notification");
const order_1 = require("./order");
const order_edit_1 = require("./order-edit");
const payment_1 = require("./payment");
const payment_collection_1 = require("./payment-collection");
const price_list_1 = require("./price-list");
const price_preference_1 = require("./price-preference");
const product_1 = require("./product");
const product_category_1 = require("./product-category");
const product_collection_1 = require("./product-collection");
const product_tag_1 = require("./product-tag");
const product_type_1 = require("./product-type");
const product_variant_1 = require("./product-variant");
const promotion_1 = require("./promotion");
const refund_reasons_1 = require("./refund-reasons");
const region_1 = require("./region");
const reservation_1 = __importDefault(require("./reservation"));
const return_1 = require("./return");
const return_reason_1 = require("./return-reason");
const sales_channel_1 = require("./sales-channel");
const shipping_option_1 = require("./shipping-option");
const shipping_profile_1 = require("./shipping-profile");
const stock_location_1 = require("./stock-location");
const store_1 = require("./store");
const tax_rate_1 = require("./tax-rate");
const tax_region_1 = require("./tax-region");
const upload_1 = require("./upload");
const user_1 = require("./user");
const workflow_execution_1 = require("./workflow-execution");
class Admin {
    constructor(client) {
        this.invite = new invite_1.Invite(client);
        this.customer = new customer_1.Customer(client);
        this.productCollection = new product_collection_1.ProductCollection(client);
        this.productCategory = new product_category_1.ProductCategory(client);
        this.priceList = new price_list_1.PriceList(client);
        this.pricePreference = new price_preference_1.PricePreference(client);
        this.product = new product_1.Product(client);
        this.productType = new product_type_1.ProductType(client);
        this.upload = new upload_1.Upload(client);
        this.region = new region_1.Region(client);
        this.returnReason = new return_reason_1.ReturnReason(client);
        this.stockLocation = new stock_location_1.StockLocation(client);
        this.salesChannel = new sales_channel_1.SalesChannel(client);
        this.fulfillmentSet = new fulfillment_set_1.FulfillmentSet(client);
        this.fulfillment = new fulfillment_1.Fulfillment(client);
        this.fulfillmentProvider = new fulfillment_provider_1.FulfillmentProvider(client);
        this.shippingOption = new shipping_option_1.ShippingOption(client);
        this.shippingProfile = new shipping_profile_1.ShippingProfile(client);
        this.inventoryItem = new inventory_item_1.InventoryItem(client);
        this.notification = new notification_1.Notification(client);
        this.order = new order_1.Order(client);
        this.orderEdit = new order_edit_1.OrderEdit(client);
        this.return = new return_1.Return(client);
        this.claim = new claim_1.Claim(client);
        this.taxRate = new tax_rate_1.TaxRate(client);
        this.taxRegion = new tax_region_1.TaxRegion(client);
        this.store = new store_1.Store(client);
        this.productTag = new product_tag_1.ProductTag(client);
        this.user = new user_1.User(client);
        this.currency = new currency_1.Currency(client);
        this.payment = new payment_1.Payment(client);
        this.productVariant = new product_variant_1.ProductVariant(client);
        this.refundReason = new refund_reasons_1.RefundReason(client);
        this.exchange = new exchange_1.Exchange(client);
        this.paymentCollection = new payment_collection_1.PaymentCollection(client);
        this.apiKey = new api_key_1.ApiKey(client);
        this.workflowExecution = new workflow_execution_1.WorkflowExecution(client);
        this.reservation = new reservation_1.default(client);
        this.customerGroup = new customer_group_1.CustomerGroup(client);
        this.promotion = new promotion_1.Promotion(client);
        this.campaign = new campaign_1.Campaign(client);
    }
}
exports.Admin = Admin;
//# sourceMappingURL=index.js.map