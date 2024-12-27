"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const path_1 = require("path");
const __fixtures__1 = require("../__fixtures__");
const module_with_providers_1 = require("../__fixtures__/module-with-providers");
const provider_1_1 = require("../__fixtures__/module-with-providers/provider-1");
const provider_2_1 = require("../__fixtures__/module-with-providers/provider-2");
const load_internal_1 = require("../load-internal");
describe("load internal", () => {
    describe("loadResources", () => {
        describe("when loading the module resources from a path", () => {
            test("should return the correct resources and generate the correct joiner config from a mix of DML entities and mikro orm entities", async () => {
                const { ModuleService, EntityModel, dmlEntity } = __fixtures__1.ModuleWithDmlMixedWithoutJoinerConfigFixtures;
                const moduleResolution = {
                    resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-with-dml-mixed-without-joiner-config"),
                    definition: {
                        key: "module-with-dml-mixed-without-joiner-config",
                        label: "Module with DML mixed without joiner config",
                        defaultPackage: false,
                        defaultModuleDeclaration: {
                            scope: "internal",
                        },
                    },
                };
                expect(ModuleService.prototype.__joinerConfig).toBeUndefined();
                const resources = await (0, load_internal_1.loadResources)({
                    moduleResolution,
                    discoveryPath: moduleResolution.resolutionPath,
                });
                expect(resources).toBeDefined();
                expect(resources.services).toHaveLength(1);
                expect(resources.services[0]).toEqual(ModuleService);
                expect(resources.models).toHaveLength(2);
                expect(resources.models).toEqual(expect.arrayContaining([
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(dmlEntity.name) }),
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(EntityModel.name) }),
                ]));
                expect(resources.repositories).toHaveLength(0);
                expect(resources.loaders).toHaveLength(2);
                expect(resources.loaders).toEqual([
                    expect.objectContaining({ name: "connectionLoader" }),
                    expect.objectContaining({ name: "containerLoader" }),
                ]);
                expect(resources.moduleService).toEqual(ModuleService);
                expect(resources.moduleService.prototype.__joinerConfig).toBeDefined();
                const generatedJoinerConfig = resources.moduleService.prototype.__joinerConfig?.();
                expect(generatedJoinerConfig).toEqual(expect.objectContaining({
                    serviceName: "module-with-dml-mixed-without-joiner-config",
                    primaryKeys: ["id"],
                    linkableKeys: {
                        dml_entity_id: "DmlEntity",
                        entity_model_id: "EntityModel",
                    },
                    alias: [
                        {
                            name: ["dml_entity", "dml_entities"],
                            entity: "DmlEntity",
                            args: {
                                methodSuffix: "DmlEntities",
                            },
                        },
                        {
                            name: ["entity_model", "entity_models"],
                            entity: "EntityModel",
                            args: {
                                methodSuffix: "EntityModels",
                            },
                        },
                    ],
                }));
            });
            test("should return the correct resources and generate the correct joiner config from DML entities", async () => {
                const { ModuleService, entityModel, dmlEntity } = __fixtures__1.ModuleWithDmlWithoutJoinerConfigFixtures;
                const moduleResolution = {
                    resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-with-dml-without-joiner-config"),
                    definition: {
                        key: "module-with-dml-without-joiner-config",
                        label: "Module with DML without joiner config",
                        defaultPackage: false,
                        defaultModuleDeclaration: {
                            scope: "internal",
                        },
                    },
                };
                expect(ModuleService.prototype.__joinerConfig).toBeUndefined();
                const resources = await (0, load_internal_1.loadResources)({
                    moduleResolution,
                    discoveryPath: moduleResolution.resolutionPath,
                });
                expect(resources).toBeDefined();
                expect(resources.services).toHaveLength(1);
                expect(resources.services[0]).toEqual(ModuleService);
                expect(resources.models).toHaveLength(2);
                expect(resources.models).toEqual(expect.arrayContaining([
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(dmlEntity.name) }),
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(entityModel.name) }),
                ]));
                expect(resources.repositories).toHaveLength(0);
                expect(resources.loaders).toHaveLength(2);
                expect(resources.loaders).toEqual([
                    expect.objectContaining({ name: "connectionLoader" }),
                    expect.objectContaining({ name: "containerLoader" }),
                ]);
                expect(resources.moduleService).toEqual(ModuleService);
                expect(resources.moduleService.prototype.__joinerConfig).toBeDefined();
                const generatedJoinerConfig = resources.moduleService.prototype.__joinerConfig?.();
                expect(generatedJoinerConfig).toEqual(expect.objectContaining({
                    serviceName: "module-with-dml-without-joiner-config",
                    primaryKeys: ["id"],
                    linkableKeys: {
                        entity_model_id: "EntityModel",
                        dml_entity_id: "DmlEntity",
                    },
                    alias: [
                        {
                            name: ["entity_model", "entity_models"],
                            entity: "EntityModel",
                            args: {
                                methodSuffix: "EntityModels",
                            },
                        },
                        {
                            name: ["dml_entity", "dml_entities"],
                            entity: "DmlEntity",
                            args: {
                                methodSuffix: "DmlEntities",
                            },
                        },
                    ],
                }));
            });
            test("should return the correct resources and generate the correct joiner config from mikro orm entities", async () => {
                const { ModuleService, EntityModel, Entity2 } = __fixtures__1.ModuleWithoutJoinerConfigFixtures;
                const moduleResolution = {
                    resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-without-joiner-config"),
                    definition: {
                        key: "module-without-joiner-config",
                        label: "Module without joiner config",
                        defaultPackage: false,
                        defaultModuleDeclaration: {
                            scope: "internal",
                        },
                    },
                };
                expect(ModuleService.prototype.__joinerConfig).toBeUndefined();
                const resources = await (0, load_internal_1.loadResources)({
                    moduleResolution,
                    discoveryPath: moduleResolution.resolutionPath,
                });
                expect(resources).toBeDefined();
                expect(resources.services).toHaveLength(1);
                expect(resources.services[0]).toEqual(ModuleService);
                expect(resources.models).toHaveLength(2);
                expect(resources.models).toEqual(expect.arrayContaining([
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(EntityModel.name) }),
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(Entity2.name) }),
                ]));
                expect(resources.repositories).toHaveLength(0);
                expect(resources.loaders).toHaveLength(2);
                expect(resources.loaders).toEqual([
                    expect.objectContaining({ name: "connectionLoader" }),
                    expect.objectContaining({ name: "containerLoader" }),
                ]);
                expect(resources.moduleService).toEqual(ModuleService);
                expect(resources.moduleService.prototype.__joinerConfig).toBeDefined();
                const generatedJoinerConfig = resources.moduleService.prototype.__joinerConfig?.();
                expect(generatedJoinerConfig).toEqual({
                    serviceName: "module-without-joiner-config",
                    primaryKeys: ["id"],
                    linkableKeys: {
                        entity2_id: "Entity2",
                        entity_model_id: "EntityModel",
                    },
                    schema: "",
                    alias: [
                        {
                            name: ["entity2", "entity2s"],
                            entity: "Entity2",
                            args: {
                                methodSuffix: "Entity2s",
                            },
                        },
                        {
                            name: ["entity_model", "entity_models"],
                            entity: "EntityModel",
                            args: {
                                methodSuffix: "EntityModels",
                            },
                        },
                    ],
                });
            });
            test("should return the correct resources and use the given joiner config", async () => {
                const { ModuleService, EntityModel, Entity2 } = __fixtures__1.ModuleWithJoinerConfigFixtures;
                const moduleResolution = {
                    resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-with-joiner-config"),
                    definition: {
                        key: "module-without-joiner-config",
                        label: "Module without joiner config",
                        defaultPackage: false,
                        defaultModuleDeclaration: {
                            scope: "internal",
                        },
                    },
                };
                expect(ModuleService.prototype.__joinerConfig).toBeDefined();
                const resources = await (0, load_internal_1.loadResources)({
                    moduleResolution,
                    discoveryPath: moduleResolution.resolutionPath,
                });
                expect(resources).toBeDefined();
                expect(resources.services).toHaveLength(1);
                expect(resources.services[0]).toEqual(ModuleService);
                expect(resources.models).toHaveLength(2);
                expect(resources.models).toEqual(expect.arrayContaining([
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(EntityModel.name) }),
                    expect.objectContaining({ name: (0, utils_1.upperCaseFirst)(Entity2.name) }),
                ]));
                expect(resources.repositories).toHaveLength(0);
                expect(resources.loaders).toHaveLength(2);
                expect(resources.loaders).toEqual([
                    expect.objectContaining({ name: "connectionLoader" }),
                    expect.objectContaining({ name: "containerLoader" }),
                ]);
                expect(resources.moduleService).toEqual(ModuleService);
                const generatedJoinerConfig = resources.moduleService.prototype.__joinerConfig?.();
                expect(generatedJoinerConfig).toEqual({
                    serviceName: "module-service",
                    primaryKeys: ["id"],
                    linkableKeys: {},
                    schema: "",
                    alias: [
                        {
                            name: ["custom_name"],
                            entity: "Custom",
                            args: {
                                methodSuffix: "Customs",
                            },
                        },
                    ],
                });
            });
        });
    });
    describe("loadInternalModule", () => {
        test("should load the module and its providers using their identifier", async () => {
            const moduleResolution = {
                resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-with-providers"),
                moduleDeclaration: {
                    scope: "internal",
                },
                definition: {
                    key: "module-with-providers",
                    label: "Module with providers",
                    defaultPackage: false,
                    defaultModuleDeclaration: {
                        scope: "internal",
                    },
                },
                options: {
                    providers: [
                        {
                            resolve: (0, path_1.join)(__dirname, "../__fixtures__/module-with-providers/provider-1"),
                            id: "provider-1-id",
                            options: {
                                api_key: "test",
                            },
                        },
                    ],
                },
            };
            const container = (0, utils_1.createMedusaContainer)();
            await (0, load_internal_1.loadInternalModule)({
                container: container,
                resolution: moduleResolution,
                logger: console,
            });
            const moduleService = container.resolve(moduleResolution.definition.key);
            const provider = moduleService.container[(0, utils_1.getProviderRegistrationKey)({
                providerId: moduleResolution.options.providers[0].id,
                providerIdentifier: provider_1_1.ModuleProviderService.identifier,
            })];
            expect(moduleService).toBeInstanceOf(module_with_providers_1.ModuleService);
            expect(provider).toBeInstanceOf(provider_1_1.ModuleProviderService);
        });
        test("should load the module and its providers using the provided id", async () => {
            const moduleResolution = {
                resolutionPath: (0, path_1.join)(__dirname, "../__fixtures__/module-with-providers"),
                moduleDeclaration: {
                    scope: "internal",
                },
                definition: {
                    key: "module-with-providers",
                    label: "Module with providers",
                    defaultPackage: false,
                    defaultModuleDeclaration: {
                        scope: "internal",
                    },
                },
                options: {
                    providers: [
                        {
                            resolve: (0, path_1.join)(__dirname, "../__fixtures__/module-with-providers/provider-2"),
                            id: "provider-2-id",
                            options: {
                                api_key: "test",
                            },
                        },
                    ],
                },
            };
            const container = (0, utils_1.createMedusaContainer)();
            await (0, load_internal_1.loadInternalModule)({
                container: container,
                resolution: moduleResolution,
                logger: console,
            });
            const moduleService = container.resolve(moduleResolution.definition.key);
            const provider = moduleService.container[(0, utils_1.getProviderRegistrationKey)({
                providerId: moduleResolution.options.providers[0].id,
                providerIdentifier: provider_2_1.ModuleProvider2Service.identifier,
            })];
            expect(moduleService).toBeInstanceOf(module_with_providers_1.ModuleService);
            expect(provider).toBeInstanceOf(provider_2_1.ModuleProvider2Service);
        });
    });
});
//# sourceMappingURL=load-internal.spec.js.map