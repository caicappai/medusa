"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
exports.ProductModule = {
    __definition: {
        key: "productService",
        registrationName: "productModuleService",
        defaultPackage: false,
        label: "ProductModuleService",
        isRequired: false,
        isQueryable: true,
        dependencies: ["eventBusModuleService"],
        defaultModuleDeclaration: {
            scope: "internal",
        },
    },
    __joinerConfig: {
        serviceName: "productService",
        primaryKeys: ["id", "handle"],
        linkableKeys: { product_id: "Product", variant_id: "ProductVariant" },
        alias: [],
    },
    softDelete: jest.fn(() => { }),
};
//# sourceMappingURL=product-module.js.map