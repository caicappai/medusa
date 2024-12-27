"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_sdk_1 = require("../../modules-sdk");
const define_config_1 = require("../define-config");
describe("defineConfig", function () {
    it("should merge empty config with the defaults", function () {
        expect((0, define_config_1.defineConfig)()).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@medusajs/medusa/cart",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
    it("should merge custom modules", function () {
        expect((0, define_config_1.defineConfig)({
            modules: {
                GithubModuleService: {
                    resolve: "./modules/github",
                },
            },
        })).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "resolve": "./modules/github",
          },
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@medusajs/medusa/cart",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
    it("should merge custom modules when an array is provided", function () {
        expect((0, define_config_1.defineConfig)({
            modules: [
                {
                    resolve: require.resolve("../__fixtures__/define-config/github"),
                    options: {
                        apiKey: "test",
                    },
                },
            ],
        })).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve("../__fixtures__/define-config/github")}",
          },
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@medusajs/medusa/cart",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
    it("should merge custom modules when an array is provided with a key to override the module registration name", function () {
        expect((0, define_config_1.defineConfig)({
            modules: [
                {
                    key: "GithubModuleServiceOverride",
                    resolve: require.resolve("../__fixtures__/define-config/github"),
                    options: {
                        apiKey: "test",
                    },
                },
            ],
        })).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleServiceOverride": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve("../__fixtures__/define-config/github")}",
          },
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@medusajs/medusa/cart",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
    it("should merge custom project.http config", function () {
        expect((0, define_config_1.defineConfig)({
            projectConfig: {
                http: {
                    adminCors: "http://localhost:3000",
                },
            },
        })).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@medusajs/medusa/cart",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
    it("should not include disabled modules", function () {
        expect((0, define_config_1.defineConfig)({
            projectConfig: {
                http: {
                    adminCors: "http://localhost:3000",
                },
            },
            modules: {
                [modules_sdk_1.Modules.CART]: false,
            },
        })).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@medusajs/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@medusajs/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@medusajs/medusa/auth",
          },
          "cache": {
            "resolve": "@medusajs/medusa/cache-inmemory",
          },
          "currency": {
            "resolve": "@medusajs/medusa/currency",
          },
          "customer": {
            "resolve": "@medusajs/medusa/customer",
          },
          "event_bus": {
            "resolve": "@medusajs/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@medusajs/medusa/file-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@medusajs/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@medusajs/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@medusajs/medusa/inventory",
          },
          "locking": {
            "resolve": "@medusajs/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@medusajs/medusa/notification-local",
                },
              ],
            },
            "resolve": "@medusajs/medusa/notification",
          },
          "order": {
            "resolve": "@medusajs/medusa/order",
          },
          "payment": {
            "resolve": "@medusajs/medusa/payment",
          },
          "pricing": {
            "resolve": "@medusajs/medusa/pricing",
          },
          "product": {
            "resolve": "@medusajs/medusa/product",
          },
          "promotion": {
            "resolve": "@medusajs/medusa/promotion",
          },
          "region": {
            "resolve": "@medusajs/medusa/region",
          },
          "sales_channel": {
            "resolve": "@medusajs/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@medusajs/medusa/stock-location",
          },
          "store": {
            "resolve": "@medusajs/medusa/store",
          },
          "tax": {
            "resolve": "@medusajs/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@medusajs/medusa/user",
          },
          "workflows": {
            "resolve": "@medusajs/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${define_config_1.DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(",\n                ")},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
        },
      }
    `);
    });
});
//# sourceMappingURL=define-config.spec.js.map