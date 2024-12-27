"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const path_1 = require("path");
const feature_flag_loader_1 = require("../feature-flag-loader");
const config_1 = require("../../config");
const filesystem = new utils_1.FileSystem((0, path_1.join)(__dirname, "__ff-test__"));
const buildFeatureFlag = (key, defaultVal) => {
    const snakeCaseKey = key.replace(/-/g, "_");
    return `
    export default {
      description: "${key} descr",
      key: "${snakeCaseKey}",
      env_key: "MEDUSA_FF_${snakeCaseKey.toUpperCase()}",
      default_val: ${defaultVal},
    }
  `;
};
describe("feature flags", () => {
    const OLD_ENV = { ...process.env };
    beforeEach(async () => {
        jest.resetModules();
        jest.clearAllMocks();
        process.env = { ...OLD_ENV };
        await filesystem.cleanup();
        config_1.configManager.loadConfig({
            projectConfig: {},
            baseDir: filesystem.basePath,
        });
    });
    afterAll(async () => {
        process.env = OLD_ENV;
        await filesystem.cleanup();
    });
    it("should load the flag from project", async () => {
        config_1.configManager.loadConfig({
            projectConfig: { featureFlags: { flag_1: false } },
            baseDir: filesystem.basePath,
        });
        await filesystem.create("flags/flag-1.js", buildFeatureFlag("flag-1", true));
        const flags = await (0, feature_flag_loader_1.featureFlagsLoader)((0, path_1.join)(filesystem.basePath, "flags"));
        expect(flags.isFeatureEnabled("flag_1")).toEqual(false);
    });
    it("should load a nested + simple flag from project", async () => {
        config_1.configManager.loadConfig({
            projectConfig: {
                featureFlags: { test: { nested: true }, simpletest: true },
            },
            baseDir: filesystem.basePath,
        });
        await filesystem.create("flags/test.js", buildFeatureFlag("test", false));
        await filesystem.create("flags/simpletest.js", buildFeatureFlag("simpletest", false));
        const flags = await (0, feature_flag_loader_1.featureFlagsLoader)((0, path_1.join)(filesystem.basePath, "flags"));
        expect(flags.isFeatureEnabled({ test: "nested" })).toEqual(true);
        expect(flags.isFeatureEnabled("simpletest")).toEqual(true);
    });
    it("should load the default feature flags", async () => {
        await filesystem.create("flags/flag-1.js", buildFeatureFlag("flag-1", false));
        const flags = await (0, feature_flag_loader_1.featureFlagsLoader)((0, path_1.join)(filesystem.basePath, "flags"));
        expect(flags.isFeatureEnabled("flag_1")).toEqual(false);
    });
    it("should load the flag from env", async () => {
        process.env.MEDUSA_FF_FLAG_1 = "false";
        await filesystem.create("flags/flag-1.js", buildFeatureFlag("flag-1", false));
        const flags = await (0, feature_flag_loader_1.featureFlagsLoader)((0, path_1.join)(filesystem.basePath, "flags"));
        expect(flags.isFeatureEnabled("flag_1")).toEqual(false);
    });
    it("should load mix of flags", async () => {
        config_1.configManager.loadConfig({
            projectConfig: { featureFlags: { flag_2: false } },
            baseDir: filesystem.basePath,
        });
        process.env.MEDUSA_FF_FLAG_3 = "true";
        await filesystem.create("flags/flag-1.js", buildFeatureFlag("flag-1", false));
        await filesystem.create("flags/flag-2.js", buildFeatureFlag("flag-2", false));
        await filesystem.create("flags/flag-3.js", buildFeatureFlag("flag-3", false));
        const flags = await (0, feature_flag_loader_1.featureFlagsLoader)((0, path_1.join)(filesystem.basePath, "flags"));
        expect(flags.isFeatureEnabled("flag_1")).toEqual(false);
        expect(flags.isFeatureEnabled("flag_2")).toEqual(false);
        expect(flags.isFeatureEnabled("flag_3")).toEqual(true);
    });
});
//# sourceMappingURL=feature-flags.spec.js.map