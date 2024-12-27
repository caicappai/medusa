export declare const InventoryModule: {
    __definition: {
        key: string;
        registrationName: string;
        defaultPackage: boolean;
        label: string;
        isRequired: boolean;
        isQueryable: boolean;
        dependencies: never[];
        defaultModuleDeclaration: {
            scope: string;
        };
    };
    __joinerConfig: {
        serviceName: string;
        primaryKeys: string[];
        linkableKeys: {
            inventory_item_id: string;
            inventory_level_id: string;
            reservation_item_id: string;
        };
    };
    softDelete: jest.Mock<void, [], any>;
};
//# sourceMappingURL=inventory-module.d.ts.map