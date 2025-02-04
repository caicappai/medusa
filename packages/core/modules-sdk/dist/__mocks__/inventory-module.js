"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
exports.InventoryModule = {
    __definition: {
        key: "inventoryService",
        registrationName: "inventoryService",
        defaultPackage: false,
        label: "InventoryService",
        isRequired: false,
        isQueryable: true,
        dependencies: [],
        defaultModuleDeclaration: {
            scope: "internal",
        },
    },
    __joinerConfig: {
        serviceName: "inventoryService",
        primaryKeys: ["id"],
        linkableKeys: {
            inventory_item_id: "InventoryItem",
            inventory_level_id: "InventoryLevel",
            reservation_item_id: "ReservationItem",
        },
    },
    softDelete: jest.fn(() => { }),
};
//# sourceMappingURL=inventory-module.js.map