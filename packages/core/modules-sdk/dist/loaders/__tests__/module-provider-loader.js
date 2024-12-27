"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const awilix_1 = require("awilix");
const module_provider_loader_1 = require("../module-provider-loader");
describe("modules loader", () => {
    let container;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        container = (0, utils_1.createMedusaContainer)();
    });
    it("should register the provider service", async () => {
        const moduleProviders = [
            {
                resolve: "@providers/default",
                id: "default",
                options: {},
            },
        ];
        await (0, module_provider_loader_1.moduleProviderLoader)({ container, providers: moduleProviders });
        const testService = container.resolve("testService");
        expect(testService).toBeTruthy();
        expect(testService.constructor.name).toEqual("TestService");
    });
    it("should fail to register the provider service", async () => {
        const moduleProviders = [
            {
                resolve: "@providers/default-with-fail-validation",
                id: "default",
                options: {},
            },
        ];
        const err = await (0, module_provider_loader_1.moduleProviderLoader)({
            container,
            providers: moduleProviders,
        }).catch((e) => e);
        expect(err).toBeTruthy();
        expect(err.message).toBe("Wrong options");
    });
    it("should register the provider service with custom register fn", async () => {
        const fn = async (klass, container, details) => {
            container.register({
                [`testServiceCustomRegistration`]: (0, awilix_1.asFunction)((cradle) => new klass(cradle, details.options), {
                    lifetime: awilix_1.Lifetime.SINGLETON,
                }),
            });
        };
        const moduleProviders = [
            {
                resolve: "@providers/default",
                id: "default",
                options: {},
            },
        ];
        await (0, module_provider_loader_1.moduleProviderLoader)({
            container,
            providers: moduleProviders,
            registerServiceFn: fn,
        });
        const testService = container.resolve("testServiceCustomRegistration");
        expect(testService).toBeTruthy();
        expect(testService.constructor.name).toEqual("TestService");
    });
    it("should fail to register the provider service with custom register fn", async () => {
        const fn = async (klass, container, details) => {
            container.register({
                [`testServiceCustomRegistration`]: (0, awilix_1.asFunction)((cradle) => new klass(cradle, details.options), {
                    lifetime: awilix_1.Lifetime.SINGLETON,
                }),
            });
        };
        const moduleProviders = [
            {
                resolve: "@providers/default-with-fail-validation",
                id: "default",
                options: {},
            },
        ];
        const err = await (0, module_provider_loader_1.moduleProviderLoader)({
            container,
            providers: moduleProviders,
            registerServiceFn: fn,
        }).catch((e) => e);
        expect(err).toBeTruthy();
        expect(err.message).toBe("Wrong options");
    });
    it("should log the errors if no service is defined", async () => {
        const moduleProviders = [
            {
                resolve: "@providers/no-service",
                id: "default",
                options: {},
            },
        ];
        try {
            await (0, module_provider_loader_1.moduleProviderLoader)({ container, providers: moduleProviders });
        }
        catch (error) {
            expect(error.message).toBe("@providers/no-service doesn't seem to have a main service exported -- make sure your module has a default export of a service.");
        }
    });
    it("should throw if no default export is defined", async () => {
        const moduleProviders = [
            {
                resolve: "@providers/no-default",
                id: "default",
                options: {},
            },
        ];
        try {
            await (0, module_provider_loader_1.moduleProviderLoader)({ container, providers: moduleProviders });
        }
        catch (error) {
            expect(error.message).toBe("@providers/no-default doesn't seem to have a main service exported -- make sure your module has a default export of a service.");
        }
    });
});
//# sourceMappingURL=module-provider-loader.js.map