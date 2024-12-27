"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = require("../../definitions");
const types_1 = require("../../types");
const register_modules_1 = require("../register-modules");
const testServiceResolved = require.resolve("../__fixtures__/test-service-resolved");
const defaultTestService = require.resolve("../__fixtures__/test-service");
describe("module definitions loader", () => {
    const defaultDefinition = {
        key: "testService",
        defaultPackage: defaultTestService,
        label: "TestService",
        isRequired: false,
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
        },
    };
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
        // Clear module definitions
        const allProperties = Object.getOwnPropertyNames(definitions_1.ModulesDefinition);
        allProperties.forEach((property) => {
            delete definitions_1.ModulesDefinition[property];
        });
    });
    it("Resolves module with default definition given empty config", () => {
        Object.assign(definitions_1.ModulesDefinition, {
            [defaultDefinition.key]: defaultDefinition,
        });
        const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key);
        expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
            resolutionPath: defaultDefinition.defaultPackage,
            definition: defaultDefinition,
            options: {},
            moduleDeclaration: {
                scope: "internal",
            },
        }));
    });
    it("Resolves a custom module without pre-defined definition", () => {
        const res = (0, register_modules_1.registerMedusaModule)("customModulesABC", {
            resolve: testServiceResolved,
            options: {
                test: 123,
            },
        });
        expect(res).toEqual({
            customModulesABC: expect.objectContaining({
                resolutionPath: testServiceResolved,
                definition: expect.objectContaining({
                    key: "customModulesABC",
                    label: "Custom: customModulesABC",
                }),
                moduleDeclaration: {
                    scope: "internal",
                },
                options: {
                    test: 123,
                },
            }),
        });
    });
    describe("boolean config", () => {
        it("Resolves module with no resolution path when given false", () => {
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: defaultDefinition,
            });
            const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, false);
            expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
                resolutionPath: false,
                definition: defaultDefinition,
                options: {},
            }));
        });
        it("Fails to resolve module with no resolution path when given false for a required module", () => {
            expect.assertions(1);
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: { ...defaultDefinition, isRequired: true },
            });
            try {
                (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, false);
            }
            catch (err) {
                expect(err.message).toEqual(`Module: ${defaultDefinition.label} is required`);
            }
        });
    });
    it("Module with no resolution path when not given custom resolution path, false as default package and required", () => {
        const definition = {
            ...defaultDefinition,
            defaultPackage: false,
            isRequired: true,
        };
        Object.assign(definitions_1.ModulesDefinition, {
            [defaultDefinition.key]: definition,
        });
        const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key);
        expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
            resolutionPath: false,
            definition: definition,
            options: {},
            moduleDeclaration: {
                scope: "internal",
            },
        }));
    });
    describe("string config", () => {
        it("Resolves module with default definition given empty config", () => {
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: defaultDefinition,
            });
            const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, defaultDefinition.defaultPackage);
            expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
                resolutionPath: defaultTestService,
                definition: defaultDefinition,
                options: {},
                moduleDeclaration: {
                    scope: "internal",
                },
            }));
        });
    });
    describe("object config", () => {
        it("Resolves resolution path and provides empty options when none are provided", () => {
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: defaultDefinition,
            });
            const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, {
                scope: types_1.MODULE_SCOPE.INTERNAL,
                resolve: defaultDefinition.defaultPackage,
            });
            expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
                resolutionPath: defaultTestService,
                definition: defaultDefinition,
                options: {},
                moduleDeclaration: {
                    scope: "internal",
                    resolve: defaultDefinition.defaultPackage,
                },
            }));
        });
        it("Resolves default resolution path and provides options when only options are provided", () => {
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: defaultDefinition,
            });
            const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, {
                options: { test: 123 },
            });
            expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
                resolutionPath: defaultDefinition.defaultPackage,
                definition: defaultDefinition,
                options: { test: 123 },
                moduleDeclaration: {
                    scope: "internal",
                    options: { test: 123 },
                },
            }));
        });
        it("Resolves resolution path and provides options when only options are provided", () => {
            Object.assign(definitions_1.ModulesDefinition, {
                [defaultDefinition.key]: defaultDefinition,
            });
            const res = (0, register_modules_1.registerMedusaModule)(defaultDefinition.key, {
                resolve: defaultDefinition.defaultPackage,
                options: { test: 123 },
                scope: "internal",
            });
            expect(res[defaultDefinition.key]).toEqual(expect.objectContaining({
                resolutionPath: defaultTestService,
                definition: defaultDefinition,
                options: { test: 123 },
                moduleDeclaration: {
                    scope: "internal",
                    resolve: defaultDefinition.defaultPackage,
                    options: { test: 123 },
                },
            }));
        });
    });
});
//# sourceMappingURL=register-modules.js.map