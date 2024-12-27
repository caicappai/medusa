"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceMock = exports.mockServiceList = exports.serviceConfigs = void 0;
const data_1 = require("./../../__fixtures__/joiner/data");
exports.serviceConfigs = [
    {
        serviceName: "user",
        primaryKeys: ["id"],
        args: {
            methodSuffix: "User",
        },
        alias: [
            {
                name: "me",
                args: {
                    extraArgument: 123,
                },
            },
            {
                name: "customer",
            },
        ],
        relationships: [
            {
                foreignKey: "products.product_id",
                serviceName: "product",
                primaryKey: "id",
                alias: "product",
            },
        ],
        extends: [
            {
                serviceName: "variantService",
                relationship: {
                    foreignKey: "user_id",
                    serviceName: "user",
                    primaryKey: "id",
                    alias: "user",
                },
            },
        ],
    },
    {
        serviceName: "product",
        primaryKeys: ["id", "sku"],
        relationships: [
            {
                foreignKey: "user_id",
                serviceName: "user",
                primaryKey: "id",
                alias: "user",
            },
        ],
    },
    {
        serviceName: "variantService",
        alias: {
            name: "variant",
        },
        fieldAlias: {
            user_shortcut: "product.user",
        },
        primaryKeys: ["id"],
        relationships: [
            {
                foreignKey: "product_id",
                serviceName: "product",
                primaryKey: "id",
                alias: "product",
            },
            {
                foreignKey: "variant_id",
                primaryKey: "id",
                serviceName: "order",
                alias: "orders",
                inverse: true, // In an inverted relationship the foreign key is on Order and the primary key is on variant
            },
        ],
    },
    {
        serviceName: "order",
        fieldAlias: {
            product_user_alias: {
                path: "products.product.user",
                forwardArgumentsOnPath: ["products.product"],
            },
        },
        primaryKeys: ["id"],
        relationships: [
            {
                foreignKey: "product_id",
                serviceName: "product",
                primaryKey: "id",
                alias: "product",
            },
            {
                foreignKey: "products.variant_id,product_id",
                serviceName: "variantService",
                primaryKey: "id,product_id",
                alias: "variant",
            },
            {
                foreignKey: "user_id",
                serviceName: "user",
                primaryKey: "id",
                alias: "user",
            },
        ],
    },
];
const mockServiceList = (serviceName) => {
    return jest.fn().mockImplementation((data) => {
        const src = {
            userService: data_1.remoteJoinerData.user,
            productService: data_1.remoteJoinerData.product,
            variantService: data_1.remoteJoinerData.variant,
            orderService: data_1.remoteJoinerData.order,
        };
        let resultset = JSON.parse(JSON.stringify(src[serviceName]));
        if (serviceName === "userService" &&
            !data.fields?.some((field) => field.includes("multiple"))) {
            resultset = resultset.map((item) => {
                delete item.nested.multiple;
                return item;
            });
        }
        // mock filtering on service order
        if (serviceName === "orderService" && data.options?.id) {
            resultset = resultset.filter((item) => data.options.id.includes(item.id));
        }
        return {
            data: resultset,
            path: serviceName === "productService" ? "rows" : undefined,
        };
    });
};
exports.mockServiceList = mockServiceList;
exports.serviceMock = {
    orderService: (0, exports.mockServiceList)("orderService"),
    userService: (0, exports.mockServiceList)("userService"),
    productService: (0, exports.mockServiceList)("productService"),
    variantService: (0, exports.mockServiceList)("variantService"),
};
//# sourceMappingURL=mock_data.js.map