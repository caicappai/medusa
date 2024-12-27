"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_module_database_config_1 = require("../load-module-database-config");
describe("loadDatabaseConfig", function () {
    afterEach(() => {
        delete process.env.DATABASE_URL;
        delete process.env.MEDUSA_DATABASE_URL;
        delete process.env.PRODUCT_DATABASE_URL;
    });
    it("should return the local configuration using the environment variable respecting their precedence", function () {
        process.env.MEDUSA_DATABASE_URL = "postgres://localhost:5432/medusa";
        process.env.PRODUCT_DATABASE_URL = "postgres://localhost:5432/product";
        process.env.DATABASE_URL = "postgres://localhost:5432/share_db";
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product");
        expect(config).toEqual({
            clientUrl: process.env.PRODUCT_DATABASE_URL,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
        delete process.env.PRODUCT_DATABASE_URL;
        config = (0, load_module_database_config_1.loadDatabaseConfig)("product");
        expect(config).toEqual({
            clientUrl: process.env.MEDUSA_DATABASE_URL,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
        delete process.env.MEDUSA_DATABASE_URL;
        config = (0, load_module_database_config_1.loadDatabaseConfig)("product");
        expect(config).toEqual({
            clientUrl: process.env.DATABASE_URL,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the remote configuration using the environment variable", function () {
        process.env.DATABASE_URL = "postgres://https://test.com:5432/medusa";
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product");
        expect(config).toEqual({
            clientUrl: process.env.DATABASE_URL,
            driverOptions: {
                connection: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            },
            debug: false,
            schema: "",
        });
        delete process.env.DATABASE_URL;
        process.env.PRODUCT_DATABASE_URL = "postgres://https://test.com:5432/medusa";
        config = (0, load_module_database_config_1.loadDatabaseConfig)("product");
        expect(config).toEqual({
            clientUrl: process.env.PRODUCT_DATABASE_URL,
            driverOptions: {
                connection: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the local configuration using the options", function () {
        process.env.DATABASE_URL = "postgres://localhost:5432/medusa";
        const options = {
            database: {
                clientUrl: "postgres://localhost:5432/medusa-test",
            },
        };
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product", options);
        expect(config).toEqual({
            clientUrl: options.database.clientUrl,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the local configuration using the options", function () {
        process.env.DATABASE_URL = "postgres://localhost:5432/medusa";
        const options = {
            database: {
                clientUrl: "postgres://127.0.0.1:5432/medusa-test",
            },
        };
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product", options);
        expect(config).toEqual({
            clientUrl: options.database.clientUrl,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the remote configuration using the options", function () {
        process.env.DATABASE_URL = "postgres://localhost:5432/medusa";
        const options = {
            database: {
                clientUrl: "postgres://https://test.com:5432/medusa-test",
            },
        };
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product", options);
        expect(config).toEqual({
            clientUrl: options.database.clientUrl,
            driverOptions: {
                connection: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the local configuration using the client url ssl_mode=disable", function () {
        process.env.DATABASE_URL = "postgres://localhost:5432/medusa";
        const options = {
            database: {
                clientUrl: "postgres://https://test.com:5432/medusa-test?ssl_mode=disable",
            },
        };
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product", options);
        expect(config).toEqual({
            clientUrl: options.database.clientUrl,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should return the remote configuration using the client url ssl_mode=false", function () {
        process.env.DATABASE_URL = "postgres://localhost:5432/medusa";
        const options = {
            database: {
                clientUrl: "postgres://https://test.com:5432/medusa-test?ssl_mode=disable",
            },
        };
        let config = (0, load_module_database_config_1.loadDatabaseConfig)("product", options);
        expect(config).toEqual({
            clientUrl: options.database.clientUrl,
            driverOptions: {
                connection: {
                    ssl: false,
                },
            },
            debug: false,
            schema: "",
        });
    });
    it("should throw if no clientUrl is provided", function () {
        let error;
        try {
            (0, load_module_database_config_1.loadDatabaseConfig)("product");
        }
        catch (e) {
            error = e;
        }
        expect(error.message).toEqual("No database clientUrl provided. Please provide the clientUrl through the [MODULE]_DATABASE_URL, MEDUSA_DATABASE_URL or DATABASE_URL environment variable or the options object in the initialize function.");
    });
});
//# sourceMappingURL=load-database-config.spec.js.map