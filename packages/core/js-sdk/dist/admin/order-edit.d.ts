import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class OrderEdit {
    /**
     * @ignore
     */
    private client;
    /**
     * @ignore
     */
    constructor(client: Client);
    /**
     * This method creates an order edit request. It sends a HTTP request to the
     * [Create Order Edit](https://docs.medusajs.com/api/admin#order-edits_postorderedits)
     * API route.
     *
     * @param body - The order edit's details.
     * @param query - Configure the fields to retrieve in the order edit.
     * @param headers - Headers to pass in the request.
     * @returns The order edit's details.
     *
     * @example
     * sdk.admin.orderEdit.initiateRequest({
     *   order_id: "order_123"
     * })
     * .then(({ order_change }) => {
     *   console.log(order_change)
     * })
     */
    initiateRequest(body: HttpTypes.AdminInitiateOrderEditRequest, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditResponse>;
    /**
     * This method changes an order edit to requested. It sends a request to the
     * [Request Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidrequest)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.request("ordch_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    request(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    /**
     * This method confirms an order edit and applies it on the order. It sends a request
     * to the [Confirm Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidconfirm)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.confirm("ordch_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    confirm(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    /**
     * This method cancels a requested order edit. It sends a request to the
     * [Cancel Order Edit](https://docs.medusajs.com/api/admin#order-edits_deleteordereditsid)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Query parameters
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.orderEdit.cancelRequest("ordch_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    cancelRequest(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditDeleteResponse>;
    /**
     * This method adds items to an order edit. These items will have the action `ITEM_ADD`.
     *
     * The method sends a request to the [Add Items](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditems)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.addItems("ordch_123", {
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    addItems(id: string, body: HttpTypes.AdminAddOrderEditItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    /**
     * This method updates the quantity and other details of an item in an order. It sends a request to the
     * [Update Item Quantity](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsitemitem_id)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param itemId - The item's ID in the order.
     * @param body - The data to edit in the item.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateOriginalItem(
     *   "ordch_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    updateOriginalItem(id: string, itemId: string, body: HttpTypes.AdminUpdateOrderEditItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    /**
     * This method updates an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * It sends a request
     * to the [Update Item](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsaction_id)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateAddedItem(
     *   "ordch_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    updateAddedItem(id: string, actionId: string, body: HttpTypes.AdminUpdateOrderEditItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    /**
     * This method removes an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The order edit's ID.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.removeAddedItem(
     *   "ordch_123",
     *   "orli_123",
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    removeAddedItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
}
//# sourceMappingURL=order-edit.d.ts.map