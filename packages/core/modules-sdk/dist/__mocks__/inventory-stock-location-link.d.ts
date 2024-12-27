export declare const InventoryStockLocationLink: {
    __definition: {
        key: string;
        registrationName: string;
        defaultPackage: string;
        label: string;
        isRequired: boolean;
        isQueryable: boolean;
        defaultModuleDeclaration: {
            scope: string;
        };
    };
    __joinerConfig: {
        serviceName: string;
        isLink: boolean;
        alias: {
            name: string;
        }[];
        primaryKeys: string[];
        relationships: ({
            serviceName: string;
            primaryKey: string;
            foreignKey: string;
            alias: string;
            args: {};
        } | {
            serviceName: string;
            primaryKey: string;
            foreignKey: string;
            alias: string;
            args?: undefined;
        })[];
        extends: {
            serviceName: string;
            relationship: {
                serviceName: string;
                primaryKey: string;
                foreignKey: string;
                alias: string;
            };
        }[];
    };
    create: jest.Mock<Promise<void>, [primaryKeyOrBulkData: string | string[] | [string | string[], string][], foreignKeyData?: string | undefined], any>;
    softDelete: jest.Mock<void, [], any>;
};
//# sourceMappingURL=inventory-stock-location-link.d.ts.map