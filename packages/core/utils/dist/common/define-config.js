"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STORE_RESTRICTED_FIELDS = void 0;
exports.defineConfig = defineConfig;
const modules_sdk_1 = require("../modules-sdk");
const is_object_1 = require("./is-object");
const is_string_1 = require("./is-string");
const normalize_import_path_with_source_1 = require("./normalize-import-path-with-source");
const resolve_exports_1 = require("./resolve-exports");
const DEFAULT_SECRET = "supersecret";
const DEFAULT_ADMIN_URL = "/";
const DEFAULT_STORE_CORS = "http://localhost:8000";
const DEFAULT_DATABASE_URL = "postgres://localhost/medusa-starter-default";
const DEFAULT_ADMIN_CORS = "http://localhost:7000,http://localhost:7001,http://localhost:5173";
exports.DEFAULT_STORE_RESTRICTED_FIELDS = [
    "order",
    "orders",
    /*"customer",
    "customers",
    "payment_collection",
    "payment_collections"*/
];
/**
 * The "defineConfig" helper can be used to define the configuration
 * of a medusa application.
 *
 * The helper under the hood merges your config with a set of defaults to
 * make an application work seamlessly, but still provide you the ability
 * to override configuration as needed.
 */
function defineConfig(config = {}) {
    const { http, ...restOfProjectConfig } = config.projectConfig || {};
    /**
     * The defaults to use for the project config. They are shallow merged
     * with the user defined config. However,
     */
    const projectConfig = {
        databaseUrl: process.env.DATABASE_URL || DEFAULT_DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS || DEFAULT_STORE_CORS,
            adminCors: process.env.ADMIN_CORS || DEFAULT_ADMIN_CORS,
            authCors: process.env.AUTH_CORS || DEFAULT_ADMIN_CORS,
            jwtSecret: process.env.JWT_SECRET || DEFAULT_SECRET,
            cookieSecret: process.env.COOKIE_SECRET || DEFAULT_SECRET,
            restrictedFields: {
                store: exports.DEFAULT_STORE_RESTRICTED_FIELDS,
            },
            ...http,
        },
        ...restOfProjectConfig,
    };
    /**
     * The defaults to use for the admin config.  They are shallow merged
     * with the user defined config
     */
    const admin = {
        backendUrl: process.env.MEDUSA_BACKEND_URL || DEFAULT_ADMIN_URL,
        path: "/app",
        ...config.admin,
    };
    /**
     * The defaults to use for the feature flags config. They are shallow merged
     * with the user defined config
     */
    const featureFlags = {
        ...config.featureFlags,
    };
    const modules = resolveModules(config.modules);
    return {
        projectConfig,
        featureFlags,
        plugins: config.plugins || [],
        admin,
        modules: modules,
    };
}
/**
 * The user API allow to use array of modules configuration. This method manage the loading of the user modules
 * along side the default modules and re map them to an object.
 *
 * @param configModules
 */
function resolveModules(configModules) {
    /**
     * The default set of modules to always use. The end user can swap
     * the modules by providing an alternate implementation via their
     * config. But they can never remove a module from this list.
     */
    const modules = [
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.CACHE] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.EVENT_BUS] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.WORKFLOW_ENGINE] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.LOCKING] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.STOCK_LOCATION] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.INVENTORY] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.PRODUCT] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.PRICING] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.PROMOTION] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.CUSTOMER] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.SALES_CHANNEL] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.CART] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.REGION] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.API_KEY] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.STORE] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.TAX] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.CURRENCY] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.PAYMENT] },
        { resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.ORDER] },
        {
            resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.AUTH],
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/auth-emailpass",
                        id: "emailpass",
                    },
                ],
            },
        },
        {
            resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.USER],
            options: {
                jwt_secret: process.env.JWT_SECRET ?? DEFAULT_SECRET,
            },
        },
        {
            resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.FILE],
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/file-local",
                        id: "local",
                    },
                ],
            },
        },
        {
            resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.FULFILLMENT],
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/fulfillment-manual",
                        id: "manual",
                    },
                ],
            },
        },
        {
            resolve: modules_sdk_1.MODULE_PACKAGE_NAMES[modules_sdk_1.Modules.NOTIFICATION],
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/notification-local",
                        id: "local",
                        options: {
                            name: "Local Notification Provider",
                            channels: ["feed"],
                        },
                    },
                ],
            },
        },
    ];
    /**
     * Backward compatibility for the old way of defining modules (object vs array)
     */
    if (configModules) {
        if ((0, is_object_1.isObject)(configModules)) {
            const modules_ = (configModules ??
                {});
            Object.entries(modules_).forEach(([key, moduleConfig]) => {
                modules.push({
                    key,
                    ...((0, is_object_1.isObject)(moduleConfig)
                        ? moduleConfig
                        : { disable: !moduleConfig }),
                });
            });
        }
        else if (Array.isArray(configModules)) {
            const modules_ = (configModules ?? []);
            modules.push(...modules_);
        }
        else {
            throw new Error("Invalid modules configuration. Should be an array or object.");
        }
    }
    const remappedModules = modules.reduce((acc, moduleConfig) => {
        if (moduleConfig.scope === "external" && !moduleConfig.key) {
            throw new Error("External modules configuration must have a 'key'. Please provide a key for the module.");
        }
        if ("disable" in moduleConfig && "key" in moduleConfig) {
            acc[moduleConfig.key] = moduleConfig;
        }
        // TODO: handle external modules later
        let serviceName = "key" in moduleConfig && moduleConfig.key ? moduleConfig.key : "";
        delete moduleConfig.key;
        if (!serviceName && "resolve" in moduleConfig) {
            if ((0, is_string_1.isString)(moduleConfig.resolve) &&
                modules_sdk_1.REVERSED_MODULE_PACKAGE_NAMES[moduleConfig.resolve]) {
                serviceName = modules_sdk_1.REVERSED_MODULE_PACKAGE_NAMES[moduleConfig.resolve];
                acc[serviceName] = moduleConfig;
                return acc;
            }
            let resolution = (0, is_string_1.isString)(moduleConfig.resolve)
                ? (0, normalize_import_path_with_source_1.normalizeImportPathWithSource)(moduleConfig.resolve)
                : moduleConfig.resolve;
            const moduleExport = (0, is_string_1.isString)(resolution)
                ? require(resolution)
                : resolution;
            const defaultExport = (0, resolve_exports_1.resolveExports)(moduleExport).default;
            const joinerConfig = typeof defaultExport.service.prototype.__joinerConfig === "function"
                ? defaultExport.service.prototype.__joinerConfig() ?? {}
                : defaultExport.service.prototype.__joinerConfig ?? {};
            serviceName = joinerConfig.serviceName;
            if (!serviceName) {
                throw new Error(`Module ${moduleConfig.resolve} doesn't have a serviceName. Please provide a 'key' for the module or check the service joiner config.`);
            }
        }
        acc[serviceName] = moduleConfig;
        return acc;
    }, {});
    // Remove any modules set to false
    Object.keys(remappedModules).forEach((key) => {
        if (remappedModules[key].disable) {
            delete remappedModules[key];
        }
    });
    return remappedModules;
}
//# sourceMappingURL=define-config.js.map