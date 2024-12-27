"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const file_system_1 = require("../file-system");
const load_env_1 = require("../load-env");
const filesystem = new file_system_1.FileSystem((0, path_1.join)(__dirname, "tmp"));
describe("loadEnv", function () {
    afterEach(async () => {
        await filesystem.cleanup();
        delete process.env.MEDUSA_VERSION;
        delete process.env.MEDUSA_DEV_VERSION;
        delete process.env.MEDUSA_TEST_VERSION;
        delete process.env.MEDUSA_STAGING_VERSION;
        delete process.env.MEDUSA_PRODUCTION_VERSION;
    });
    it("should load .env file when in unknown environment", async function () {
        await filesystem.create(".env", "MEDUSA_VERSION=1.0");
        (0, load_env_1.loadEnv)("", filesystem.basePath);
        expect(process.env.MEDUSA_VERSION).toEqual("1.0");
    });
    it("should load .env file for known environments", async function () {
        await filesystem.create(".env", "MEDUSA_DEV_VERSION=1.0");
        await filesystem.create(".env.test", "MEDUSA_TEST_VERSION=1.0");
        await filesystem.create(".env.staging", "MEDUSA_STAGING_VERSION=1.0");
        await filesystem.create(".env.production", "MEDUSA_PRODUCTION_VERSION=1.0");
        (0, load_env_1.loadEnv)("development", filesystem.basePath);
        (0, load_env_1.loadEnv)("test", filesystem.basePath);
        (0, load_env_1.loadEnv)("staging", filesystem.basePath);
        (0, load_env_1.loadEnv)("production", filesystem.basePath);
        expect(process.env.MEDUSA_DEV_VERSION).toEqual("1.0");
        expect(process.env.MEDUSA_TEST_VERSION).toEqual("1.0");
        expect(process.env.MEDUSA_STAGING_VERSION).toEqual("1.0");
        expect(process.env.MEDUSA_PRODUCTION_VERSION).toEqual("1.0");
    });
});
//# sourceMappingURL=load-env.spec.js.map