"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_object_by_keys_1 = require("../filter-object-by-keys");
describe("filterObjectByKeys", function () {
    it("should return an object with only the filtered keys", function () {
        const cart = {
            id: "cart_id",
            customer: {
                id: "cus_id",
                groups: [
                    { id: "group_1", name: "test" },
                    { id: "group_2", name: "test 2" },
                ],
            },
            items: [
                {
                    product_id: "product-1",
                    product: { id: "product-1" },
                },
                {
                    product_id: "product-2",
                    product: { id: "product-2" },
                },
            ],
            shipping_method: null,
        };
        let transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, [
            "id",
            "customer.id",
            "customer.groups.id",
            "customer.groups.name",
            "items.product",
        ]);
        expect(transformedObject).toEqual({
            id: "cart_id",
            customer: {
                id: "cus_id",
                groups: [
                    {
                        id: "group_1",
                        name: "test",
                    },
                    {
                        id: "group_2",
                        name: "test 2",
                    },
                ],
            },
            items: [
                {
                    product: {
                        id: "product-1",
                    },
                },
                {
                    product: {
                        id: "product-2",
                    },
                },
            ],
        });
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, [
            "id",
            "customer.id",
            "customer.groups.id",
            "customer.groups.name",
        ]);
        expect(transformedObject).toEqual({
            id: "cart_id",
            customer: {
                id: "cus_id",
                groups: [
                    {
                        id: "group_1",
                        name: "test",
                    },
                    {
                        id: "group_2",
                        name: "test 2",
                    },
                ],
            },
        });
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, [
            "id",
            "customer.id",
            "customer.groups.id",
        ]);
        expect(transformedObject).toEqual({
            id: "cart_id",
            customer: {
                id: "cus_id",
                groups: [
                    {
                        id: "group_1",
                    },
                    {
                        id: "group_2",
                    },
                ],
            },
        });
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, ["id", "customer.id"]);
        expect(transformedObject).toEqual({
            id: "cart_id",
            customer: {
                id: "cus_id",
            },
        });
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, ["id"]);
        expect(transformedObject).toEqual({
            id: "cart_id",
        });
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, []);
        expect(transformedObject).toEqual({});
        transformedObject = (0, filter_object_by_keys_1.filterObjectByKeys)(cart, [
            "doesnotexist.doesnotexist",
            "shipping_method.city",
        ]);
        expect(transformedObject).toEqual({
            shipping_method: null,
        });
    });
});
//# sourceMappingURL=filter-object-by-keys.spec.js.map