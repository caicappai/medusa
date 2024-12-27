"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mikro_orm_cli_config_builder_1 = require("../mikro-orm-cli-config-builder");
const moduleName = "myTestService";
describe("defineMikroOrmCliConfig", () => {
    test(`should throw an error if entities is not provided`, () => {
        const options = {};
        expect(() => (0, mikro_orm_cli_config_builder_1.defineMikroOrmCliConfig)(moduleName, options)).toThrow("defineMikroOrmCliConfig failed with: entities is required");
    });
    test("should return the correct config", () => {
        const config = (0, mikro_orm_cli_config_builder_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [{}],
            dbName: "medusa-fulfillment",
        });
        expect(config).toEqual({
            entities: [{}],
            type: "postgresql",
            host: "127.0.0.1",
            user: "postgres",
            password: "",
            dbName: "medusa-fulfillment",
            migrations: {
                generator: expect.any(Function),
            },
        });
    });
    test("should return the correct config inferring the databaseName", () => {
        const config = (0, mikro_orm_cli_config_builder_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [{}],
        });
        expect(config).toEqual({
            entities: [{}],
            type: "postgresql",
            dbName: "medusa-my-test",
            host: "127.0.0.1",
            user: "postgres",
            password: "",
            migrations: {
                generator: expect.any(Function),
            },
        });
    });
});
//# sourceMappingURL=mikro-orm-cli-config-builder.spec.js.map