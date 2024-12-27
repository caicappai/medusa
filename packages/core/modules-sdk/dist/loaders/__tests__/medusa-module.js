"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const awilix_1 = require("awilix");
const medusa_module_1 = require("../../medusa-module");
const mockRegisterMedusaModule = jest.fn().mockImplementation(() => {
    return {
        moduleKey: {
            definition: {
                key: "moduleKey",
            },
            moduleDeclaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
            },
        },
    };
});
const mockModuleLoader = jest.fn().mockImplementation(({ container }) => {
    container.register({
        moduleKey: (0, awilix_1.asValue)({}),
    });
    return Promise.resolve({});
});
jest.mock("./../../loaders", () => ({
    registerMedusaModule: jest
        .fn()
        .mockImplementation((...args) => mockRegisterMedusaModule()),
    moduleLoader: jest
        .fn()
        .mockImplementation((...args) => mockModuleLoader.apply(this, args)),
}));
describe("Medusa Modules", () => {
    beforeEach(() => {
        medusa_module_1.MedusaModule.clearInstances();
        jest.resetModules();
        jest.clearAllMocks();
    });
    it("should create singleton instances", async () => {
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    abc: 123,
                },
            },
        });
        expect(mockRegisterMedusaModule).toBeCalledTimes(1);
        expect(mockModuleLoader).toBeCalledTimes(1);
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    abc: 123,
                },
            },
        });
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    different_options: "abc",
                },
            },
        });
        expect(mockRegisterMedusaModule).toBeCalledTimes(2);
        expect(mockModuleLoader).toBeCalledTimes(2);
    });
    it("should prevent the module being loaded multiple times under concurrent requests", async () => {
        const load = [];
        for (let i = 5; i--;) {
            load.push(medusa_module_1.MedusaModule.bootstrap({
                moduleKey: "moduleKey",
                defaultPath: "@path",
                declaration: {
                    scope: types_1.MODULE_SCOPE.INTERNAL,
                    resolve: "@path",
                    options: {
                        abc: 123,
                    },
                },
            }));
        }
        const intances = Promise.all(load);
        expect(mockRegisterMedusaModule).toBeCalledTimes(1);
        expect(mockModuleLoader).toBeCalledTimes(1);
        expect(intances[(await intances).length - 1]).toBe(intances[0]);
    });
    it("getModuleInstance should return the first instance of the module if there is none flagged as 'main'", async () => {
        const moduleA = await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    abc: 123,
                },
            },
        });
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    different_options: "abc",
                },
            },
        });
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey")).toEqual(moduleA);
    });
    it("should return the module flagged as 'main' when multiple instances are available", async () => {
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                options: {
                    abc: 123,
                },
            },
        });
        const moduleB = await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                main: true,
                options: {
                    different_options: "abc",
                },
            },
        });
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey")).toEqual(moduleB);
    });
    it("should retrieve the module by their given alias", async () => {
        const moduleA = await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                alias: "mod_A",
                options: {
                    abc: 123,
                },
            },
        });
        const moduleB = await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                main: true,
                alias: "mod_B",
                options: {
                    different_options: "abc",
                },
            },
        });
        const moduleC = await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                alias: "mod_C",
                options: {
                    moduleC: true,
                },
            },
        });
        // main
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey")).toEqual(moduleB);
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey", "mod_A")).toEqual(moduleA);
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey", "mod_B")).toEqual(moduleB);
        expect(medusa_module_1.MedusaModule.getModuleInstance("moduleKey", "mod_C")).toEqual(moduleC);
    });
    it("should prevent two main modules being set as 'main'", async () => {
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                alias: "mod_A",
                options: {
                    abc: 123,
                },
            },
        });
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                main: true,
                alias: "mod_B",
                options: {
                    different_options: "abc",
                },
            },
        });
        const moduleC = medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                main: true,
                alias: "mod_C",
                options: {
                    moduleC: true,
                },
            },
        });
        await expect(moduleC).rejects.toThrow("Module moduleKey already have a 'main' registered.");
    });
    it("should prevent the same alias be used for different instances of the same module", async () => {
        await medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                alias: "module_alias",
                options: {
                    different_options: "abc",
                },
            },
        });
        const moduleC = medusa_module_1.MedusaModule.bootstrap({
            moduleKey: "moduleKey",
            defaultPath: "@path",
            declaration: {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: "@path",
                alias: "module_alias",
                options: {
                    moduleC: true,
                },
            },
        });
        await expect(moduleC).rejects.toThrow("Module moduleKey already registed as 'module_alias'. Please choose a different alias.");
    });
});
//# sourceMappingURL=medusa-module.js.map