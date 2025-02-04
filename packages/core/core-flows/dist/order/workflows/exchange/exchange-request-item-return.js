"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderExchangeRequestItemReturnWorkflow = exports.orderExchangeRequestItemReturnWorkflowId = exports.exchangeRequestItemReturnValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const update_order_exchanges_1 = require("../../steps/exchange/update-order-exchanges");
const preview_order_change_1 = require("../../steps/preview-order-change");
const create_returns_1 = require("../../steps/return/create-returns");
const update_order_changes_1 = require("../../steps/update-order-changes");
const order_validation_1 = require("../../utils/order-validation");
const create_order_change_actions_1 = require("../create-order-change-actions");
/**
 * This step validates that items can be returned as part of an exchange.
 */
exports.exchangeRequestItemReturnValidationStep = (0, workflows_sdk_1.createStep)("exchange-request-item-return-validation", async function ({ order, orderChange, orderReturn, orderExchange, items, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({ order, inputItems: items });
});
exports.orderExchangeRequestItemReturnWorkflowId = "exchange-request-item-return";
/**
 * This workflow adds items to be retuned as part of the exchange.
 */
exports.orderExchangeRequestItemReturnWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.orderExchangeRequestItemReturnWorkflowId, function (input) {
    const orderExchange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_exchange",
        fields: ["id", "order_id", "return_id", "canceled_at"],
        variables: { id: input.exchange_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "exchange-query" });
    const existingOrderReturn = (0, workflows_sdk_1.when)({ orderExchange }, ({ orderExchange }) => {
        return orderExchange.return_id;
    }).then(() => {
        return (0, common_1.useRemoteQueryStep)({
            entry_point: "return",
            fields: ["id", "status", "order_id", "canceled_at"],
            variables: { id: orderExchange.return_id },
            list: false,
            throw_if_key_not_found: true,
        }).config({ name: "return-query" });
    });
    const createdReturn = (0, workflows_sdk_1.when)({ orderExchange }, ({ orderExchange }) => {
        return !orderExchange.return_id;
    }).then(() => {
        return (0, create_returns_1.createReturnsStep)([
            {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
            },
        ]);
    });
    const orderReturn = (0, workflows_sdk_1.transform)({ createdReturn, existingOrderReturn, orderExchange }, ({ createdReturn, existingOrderReturn, orderExchange }) => {
        return existingOrderReturn ?? createdReturn?.[0];
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "items.*"],
        variables: { id: orderExchange.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status"],
        variables: {
            filters: {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({
        name: "order-change-query",
        status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
    });
    (0, workflows_sdk_1.when)({ createdReturn }, ({ createdReturn }) => {
        return !!createdReturn?.length;
    }).then(() => {
        (0, update_order_changes_1.updateOrderChangesStep)([
            {
                id: orderChange.id,
                return_id: createdReturn?.[0]?.id,
            },
        ]);
    });
    (0, exports.exchangeRequestItemReturnValidationStep)({
        order,
        items: input.items,
        orderExchange,
        orderReturn,
        orderChange,
    });
    (0, workflows_sdk_1.when)({ orderExchange }, ({ orderExchange }) => {
        return !orderExchange.return_id;
    }).then(() => {
        const createdReturnId = (0, workflows_sdk_1.transform)({ createdReturn }, ({ createdReturn }) => {
            return createdReturn?.[0].id;
        });
        (0, update_order_exchanges_1.updateOrderExchangesStep)([
            {
                id: orderExchange.id,
                return_id: createdReturnId,
            },
        ]);
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({ order, orderChange, orderExchange, orderReturn, items: input.items }, ({ order, orderChange, orderExchange, orderReturn, items }) => {
        return items.map((item) => ({
            order_change_id: orderChange.id,
            order_id: order.id,
            exchange_id: orderExchange.id,
            return_id: orderReturn.id,
            version: orderChange.version,
            action: utils_1.ChangeActionType.RETURN_ITEM,
            internal_note: item.internal_note,
            reference: "return",
            reference_id: orderReturn.id,
            details: {
                reference_id: item.id,
                quantity: item.quantity,
                reason_id: item.reason_id,
                metadata: item.metadata,
            },
        }));
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: orderChangeActionInput,
    });
    return new workflows_sdk_1.WorkflowResponse((0, preview_order_change_1.previewOrderChangeStep)(orderExchange.order_id));
});
//# sourceMappingURL=exchange-request-item-return.js.map