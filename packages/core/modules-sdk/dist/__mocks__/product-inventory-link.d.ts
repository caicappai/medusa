export declare const ProductInventoryLinkModule: {
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
        databaseConfig: {
            tableName: string;
        };
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
            deleteCascade: boolean;
        } | {
            serviceName: string;
            primaryKey: string;
            foreignKey: string;
            alias: string;
            deleteCascade: boolean;
            args?: undefined;
        })[];
        extends: ({
            serviceName: string;
            relationship: {
                serviceName: string;
                primaryKey: string;
                foreignKey: string;
                alias: string;
                isList: boolean;
            };
        } | {
            serviceName: string;
            relationship: {
                serviceName: string;
                primaryKey: string;
                foreignKey: string;
                alias: string;
                isList?: undefined;
            };
        })[];
    };
    create: jest.Mock<Promise<void>, [primaryKeyOrBulkData: string | string[] | [string | string[], string][], foreignKeyData?: string | undefined], any>;
    softDelete: jest.Mock<void, [], any>;
};
//# sourceMappingURL=product-inventory-link.d.ts.map