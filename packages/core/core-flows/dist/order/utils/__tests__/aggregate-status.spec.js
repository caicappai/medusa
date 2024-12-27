"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aggregate_status_1 = require("../aggregate-status");
describe("Aggregate Order Status", () => {
    it("should return aggregated payment collection status", () => {
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [],
        })).toEqual("not_paid");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [{ status: "not_paid" }],
        })).toEqual("not_paid");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [{ status: "not_paid" }, { status: "awaiting" }],
        })).toEqual("awaiting");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "requires_action" },
                { status: "refunded" },
                { status: "refunded" },
                { status: "captured" },
                { status: "captured" },
                { status: "canceled" },
                { status: "authorized" },
            ],
        })).toEqual("requires_action");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "awaiting" },
                { status: "awaiting" },
                { status: "canceled" },
                { status: "awaiting" },
            ],
        })).toEqual("awaiting");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized" },
                { status: "authorized" },
                { status: "canceled" },
            ],
        })).toEqual("authorized");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "awaiting" },
                { status: "authorized" },
                { status: "canceled" },
            ],
        })).toEqual("partially_authorized");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", refunded_amount: 10, amount: 10 },
                { status: "authorized", refunded_amount: 5, amount: 10 },
                { status: "canceled" },
            ],
        })).toEqual("partially_refunded");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized", refunded_amount: 10, amount: 10 },
                { status: "authorized", refunded_amount: 10, amount: 10 },
                { status: "authorized" },
                { status: "canceled" },
            ],
        })).toEqual("partially_refunded");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized", captured_amount: 12, amount: 12 },
                { status: "canceled" },
            ],
        })).toEqual("captured");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 0, amount: 0 },
                { status: "authorized", captured_amount: 12, amount: 12 },
                { status: "canceled" },
            ],
        })).toEqual("captured");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized", captured_amount: 5, amount: 10 },
            ],
        })).toEqual("partially_captured");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized" },
            ],
        })).toEqual("partially_captured");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [
                { status: "authorized", captured_amount: 10, amount: 10 },
                { status: "authorized", captured_amount: 12, amount: 12 },
            ],
        })).toEqual("captured");
        expect((0, aggregate_status_1.getLastPaymentStatus)({
            payment_collections: [{ status: "canceled" }, { status: "canceled" }],
        })).toEqual("canceled");
    });
    it("should return aggregated fulfillment status", () => {
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [],
        })).toEqual("not_fulfilled");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ created_at: new Date() }],
        })).toEqual("not_fulfilled");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ created_at: new Date() }, { packed_at: new Date() }],
        })).toEqual("partially_fulfilled");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ packed_at: new Date() }, { packed_at: new Date() }],
        })).toEqual("fulfilled");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ shipped_at: new Date() }, { packed_at: new Date() }],
        })).toEqual("partially_shipped");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ shipped_at: new Date() }, { shipped_at: new Date() }],
        })).toEqual("shipped");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [
                { shipped_at: new Date() },
                { delivered_at: new Date() },
            ],
        })).toEqual("partially_delivered");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [
                { delivered_at: new Date() },
                { delivered_at: new Date() },
            ],
        })).toEqual("delivered");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [
                { delivered_at: new Date() },
                { canceled_at: new Date() },
            ],
        })).toEqual("delivered");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [{ shipped_at: new Date() }, { canceled_at: new Date() }],
        })).toEqual("shipped");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [
                { packed_at: new Date() },
                { shipped_at: new Date() },
                { canceled_at: new Date() },
            ],
        })).toEqual("partially_shipped");
        expect((0, aggregate_status_1.getLastFulfillmentStatus)({
            fulfillments: [
                { canceled_at: new Date() },
                { canceled_at: new Date() },
            ],
        })).toEqual("canceled");
    });
});
//# sourceMappingURL=aggregate-status.spec.js.map