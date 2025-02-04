var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Exchange {
    /**
     * @ignore
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of exchanges. It sends a request to the
     * [List Exchanges](https://docs.medusajs.com/api/admin#exchanges_getexchanges)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of exchanges.
     *
     * @example
     * To retrieve the list of exchanges:
     *
     * ```ts
     * sdk.admin.exchange.list()
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each exchange:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   fields: "id,*order"
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges`, {
                query,
                headers,
            });
        });
    }
    /**
     * This method retrieves an exchange by its ID. It sends a request to the
     * [Get Exchange](https://docs.medusajs.com/api/admin#exchanges_getexchangesid)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * To retrieve an exchange by its ID:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123", {
     *   fields: "id,*order"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}`, {
                query,
                headers,
            });
        });
    }
    /**
     * This method creates an admin exchange. It sends a request to the
     * [Create Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchanges) API route.
     *
     * @param body - The exchange's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.create({
     *   order_id: "order_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method cancels an exchange. It sends a request to the
     * [Cancel Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidcancel) API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/cancel`, {
                method: "POST",
                headers,
                query,
            });
        });
    }
    /**
     * This method adds inbound (or return) items to an exchange. These inbound items will
     * have the action `RETURN_ITEM`.
     *
     * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundItems("exchange_123", {
     *   items: [{
     *     id: "orli_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    addInboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method updates an inbound (or return) item from an exchange using the ID of
     * the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can
     * check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    updateInboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method removes an inbound (or return) item from an exchange using the ID of the
     * item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    removeInboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    /**
     * This method adds an inbound (or return) shipping method to an exchange.
     * The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    addInboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method updates the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *    {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    updateInboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method removes the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    deleteInboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    /**
     * This method adds outbound (or new) items to an exchange.
     * These outbound items will have the action `ITEM_ADD`.
     *
     * This method sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundItems("exchange_123", {
     *   items: [{
     *     id: "variant_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    addOutboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method updates an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param body - The item's details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    updateOutboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method removes an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    removeOutboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    /**
     * This method adds an outbound shipping method to an exchange. The outbound shipping method
     * will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    addOutboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method updates the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    updateOutboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method removes the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    deleteOutboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    /**
     * This method confirms an exchange request, applying its changes on the associated order.
     *
     * This method sends a request to the [Confirm Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The confirmation's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange and associated return's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.request("exchange_123", {})
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    request(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method cancels an exchange request. It sends a request to the
     * [Cancel Exchange Request](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
}
//# sourceMappingURL=exchange.js.map