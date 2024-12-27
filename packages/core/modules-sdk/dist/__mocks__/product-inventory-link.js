"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryLinkModule = void 0;
exports.ProductInventoryLinkModule = {
    __definition: {
        key: "productVariantInventoryInventoryItemLink",
        registrationName: "productVariantInventoryInventoryItemLink",
        defaultPackage: "",
        label: "productVariantInventoryInventoryItemLink",
        isRequired: false,
        isQueryable: true,
        defaultModuleDeclaration: {
            scope: "internal",
        },
    },
    __joinerConfig: {
        serviceName: "productVariantInventoryInventoryItemLink",
        isLink: true,
        databaseConfig: {
            tableName: "product_variant_inventory_item",
        },
        alias: [
            {
                name: "product_variant_inventory_item",
            },
            {
                name: "product_variant_inventory_items",
            },
        ],
        primaryKeys: ["variant_id", "inventory_item_id"],
        relationships: [
            {
                serviceName: "productService",
                primaryKey: "id",
                foreignKey: "variant_id",
                alias: "variant",
                args: {},
                deleteCascade: true,
            },
            {
                serviceName: "inventoryService",
                primaryKey: "id",
                foreignKey: "inventory_item_id",
                alias: "inventory",
                deleteCascade: true,
            },
        ],
        extends: [
            {
                serviceName: "productService",
                relationship: {
                    serviceName: "productVariantInventoryInventoryItemLink",
                    primaryKey: "variant_id",
                    foreignKey: "id",
                    alias: "inventory_items",
                    isList: true,
                },
            },
            {
                serviceName: "inventoryService",
                relationship: {
                    serviceName: "productVariantInventoryInventoryItemLink",
                    primaryKey: "inventory_item_id",
                    foreignKey: "id",
                    alias: "variant_link",
                },
            },
        ],
    },
    create: jest.fn(async (primaryKeyOrBulkData, foreignKeyData) => { }),
    softDelete: jest.fn(() => { }),
};
//# sourceMappingURL=product-inventory-link.js.map