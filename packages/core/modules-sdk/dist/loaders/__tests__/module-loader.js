"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const types_1 = require("../../types");
const module_loader_1 = require("../module-loader");
const logger = {
    warn: jest.fn(),
    error: jest.fn(),
};
describe("modules loader", () => {
    let container;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        container = (0, utils_1.createMedusaContainer)();
    });
    it("should register the service as undefined in the container when no resolution path is given", async () => {
        const moduleResolutions = {
            testService: {
                resolutionPath: false,
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        await (0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger });
        const testService = container.resolve(moduleResolutions.testService.definition.key);
        expect(testService).toBe(undefined);
    });
    it("should register the service ", async () => {
        const moduleResolutions = {
            testService: {
                resolutionPath: require.resolve("../__mocks__/@modules/default"),
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        await (0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger });
        const testService = container.resolve(moduleResolutions.testService.definition.key, {});
        /*
        expect(trackInstallation).toHaveBeenCalledWith(
          {
            module: moduleResolutions.testService.definition.key,
            resolution: moduleResolutions.testService.resolutionPath,
          },
          "module"
        )
        */
        expect(testService).toBeTruthy();
        expect(typeof testService).toEqual("object");
    });
    it("should run the defined loaders and logs the errors if something fails", async () => {
        const moduleResolutions = {
            testService: {
                resolutionPath: require.resolve("../__mocks__/@modules/brokenloader"),
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        await expect((0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger })).rejects.toThrow("Loaders for module TestService failed: loader");
    });
    it("should log the errors if no service is defined", async () => {
        const moduleResolutions = {
            testService: {
                resolutionPath: require.resolve("../__mocks__/@modules/no-service"),
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        await expect((0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger })).rejects.toThrow("No service found in module TestService. Make sure your module exports a service.");
    });
    it("should throw an error if no service is defined and the module is required", async () => {
        const moduleResolutions = {
            testService: {
                resolutionPath: require.resolve("../__mocks__/@modules/no-service"),
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    isRequired: true,
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        await expect((0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger })).rejects.toThrow("No service found in module TestService. Make sure your module exports a service.");
    });
    it("should throw an error if the default package isn't found and the module is required", async () => {
        expect.assertions(1);
        const moduleResolutions = {
            testService: {
                resolutionPath: "@medusajs/testService",
                definition: {
                    key: "testService",
                    defaultPackage: "@medusajs/testService",
                    label: "TestService",
                    isRequired: true,
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                moduleDeclaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                },
            },
        };
        try {
            await (0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger });
        }
        catch (err) {
            expect(err.message).toEqual(`Make sure you have installed the default package: @medusajs/testService`);
        }
    });
    it("should throw an error if no scope is defined on the module declaration", async () => {
        expect.assertions(1);
        const moduleResolutions = {
            testService: {
                resolutionPath: "@modules/no-service",
                definition: {
                    key: "testService",
                    defaultPackage: "testService",
                    label: "TestService",
                    isRequired: true,
                    defaultModuleDeclaration: {
                        scope: types_1.MODULE_SCOPE.INTERNAL,
                    },
                },
                // @ts-ignore
                moduleDeclaration: {},
            },
        };
        try {
            await (0, module_loader_1.moduleLoader)({ container, moduleResolutions, logger });
        }
        catch (err) {
            expect(err.message).toEqual("The module TestService has to define its scope (internal | external)");
        }
    });
});
//# sourceMappingURL=module-loader.js.map