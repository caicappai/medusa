"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = require("../loader");
const path_1 = require("path");
const container_1 = require("../../container");
const utils_1 = require("@medusajs/utils");
describe("configLoader", () => {
    const entryDirectory = (0, path_1.join)(__dirname, "../__fixtures__");
    it("should load the config properly", async () => {
        let configModule = container_1.container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
        expect(configModule).toBeUndefined();
        await (0, loader_1.configLoader)(entryDirectory, "medusa-config");
        configModule = container_1.container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
        expect(configModule).toBeDefined();
        expect(configModule.projectConfig.databaseName).toBeUndefined();
        await (0, loader_1.configLoader)(entryDirectory, "medusa-config-2");
        configModule = container_1.container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
        expect(configModule).toBeDefined();
        expect(configModule.projectConfig.databaseName).toBe("foo");
        expect(configModule.projectConfig.workerMode).toBe("shared");
        process.env.MEDUSA_WORKER_MODE = "worker";
        await (0, loader_1.configLoader)(entryDirectory, "medusa-config-2");
        configModule = container_1.container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
        expect(configModule).toBeDefined();
        expect(configModule.projectConfig.databaseName).toBe("foo");
        expect(configModule.projectConfig.workerMode).toBe("worker");
    });
});
//# sourceMappingURL=index.spec.js.map