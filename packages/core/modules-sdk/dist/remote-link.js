"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLink = void 0;
const utils_1 = require("@medusajs/utils");
const medusa_module_1 = require("./medusa-module");
const convert_data_to_link_definition_1 = require("./utils/convert-data-to-link-definition");
const linking_error_1 = require("./utils/linking-error");
class RemoteLink {
    constructor(modulesLoaded) {
        this.modulesMap = new Map();
        this.relationsPairs = new Map();
        this.relations = new Map();
        if (!modulesLoaded?.length) {
            modulesLoaded = medusa_module_1.MedusaModule.getLoadedModules().map((mod) => Object.values(mod)[0]);
        }
        for (const mod of modulesLoaded || []) {
            this.addModule(mod);
        }
    }
    addModule(mod) {
        if (!mod.__definition.isQueryable || mod.__joinerConfig.isReadOnlyLink) {
            return;
        }
        const joinerConfig = mod.__joinerConfig;
        const serviceName = joinerConfig.isLink
            ? joinerConfig.serviceName
            : mod.__definition.key;
        if (this.modulesMap.has(serviceName)) {
            throw new Error(`Duplicated instance of module ${serviceName} is not allowed.`);
        }
        if (joinerConfig.relationships?.length) {
            if (joinerConfig.isLink) {
                const [primary, foreign] = joinerConfig.relationships;
                const key = [
                    primary.serviceName,
                    primary.foreignKey,
                    foreign.serviceName,
                    foreign.foreignKey,
                ].join("-");
                this.relationsPairs.set(key, mod);
            }
            for (const relationship of joinerConfig.relationships) {
                if (joinerConfig.isLink && !relationship.deleteCascade) {
                    continue;
                }
                this.addRelationship(serviceName, {
                    ...relationship,
                    isPrimary: false,
                    isForeign: true,
                });
            }
        }
        if (joinerConfig.extends?.length) {
            for (const service of joinerConfig.extends) {
                const relationship = service.relationship;
                this.addRelationship(service.serviceName, {
                    ...relationship,
                    serviceName: serviceName,
                    isPrimary: true,
                    isForeign: false,
                });
            }
        }
        this.modulesMap.set(serviceName, mod);
    }
    addRelationship(serviceName, relationship) {
        const { primaryKey, foreignKey } = relationship;
        if (!this.relations.has(serviceName)) {
            this.relations.set(serviceName, new Map());
        }
        const key = relationship.isPrimary ? primaryKey : foreignKey;
        const serviceMap = this.relations.get(serviceName);
        if (!serviceMap.has(key)) {
            serviceMap.set(key, []);
        }
        serviceMap.get(key).push(relationship);
    }
    getLinkModule(moduleA, moduleAKey, moduleB, moduleBKey) {
        const key = [moduleA, moduleAKey, moduleB, moduleBKey].join("-");
        return this.relationsPairs.get(key);
    }
    getRelationships() {
        return this.relations;
    }
    getLinkableKeys(mod) {
        return ((mod.__joinerConfig.linkableKeys &&
            Object.keys(mod.__joinerConfig.linkableKeys)) ||
            mod.__joinerConfig.primaryKeys ||
            []);
    }
    async executeCascade(removedServices, executionMethod) {
        const removedIds = {};
        const returnIdsList = {};
        const processedIds = {};
        const services = Object.keys(removedServices).map((serviceName) => {
            const deleteKeys = {};
            for (const field in removedServices[serviceName]) {
                deleteKeys[field] = Array.isArray(removedServices[serviceName][field])
                    ? removedServices[serviceName][field]
                    : [removedServices[serviceName][field]];
            }
            return { serviceName, deleteKeys };
        });
        const errors = [];
        const cascade = async (services, isCascading = false) => {
            let method = executionMethod;
            if (errors.length) {
                return returnIdsList;
            }
            const servicePromises = services.map(async (serviceInfo) => {
                const serviceRelations = this.relations.get(serviceInfo.serviceName);
                if (!serviceRelations) {
                    return;
                }
                const values = serviceInfo.deleteKeys;
                const deletePromises = [];
                for (const field in values) {
                    const relatedServices = serviceRelations.get(field);
                    if (!relatedServices || !values[field]?.length) {
                        continue;
                    }
                    const relatedServicesPromises = relatedServices.map(async (relatedService) => {
                        const { serviceName, primaryKey, args } = relatedService;
                        const processedHash = `${serviceName}-${primaryKey}`;
                        if (!processedIds[processedHash]) {
                            processedIds[processedHash] = new Set();
                        }
                        const unprocessedIds = values[field].filter((id) => !processedIds[processedHash].has(id));
                        if (!unprocessedIds.length) {
                            return;
                        }
                        unprocessedIds.forEach((id) => {
                            processedIds[processedHash].add(id);
                        });
                        let cascadeDelKeys = {};
                        cascadeDelKeys[primaryKey] = unprocessedIds;
                        const service = this.modulesMap.get(serviceName);
                        const returnFields = this.getLinkableKeys(service);
                        let deletedEntities = {};
                        try {
                            if (args?.methodSuffix) {
                                method += (0, utils_1.toPascalCase)(args.methodSuffix);
                            }
                            const removed = await service[method](cascadeDelKeys, {
                                returnLinkableKeys: returnFields,
                            });
                            deletedEntities = removed;
                        }
                        catch (error) {
                            errors.push({
                                serviceName,
                                method,
                                args: cascadeDelKeys,
                                error: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))),
                            });
                            return;
                        }
                        if (Object.keys(deletedEntities).length === 0) {
                            return;
                        }
                        removedIds[serviceName] = {
                            ...deletedEntities,
                        };
                        if (!isCascading) {
                            returnIdsList[serviceName] = {
                                ...deletedEntities,
                            };
                        }
                        else {
                            const [mainKey] = returnFields;
                            if (!returnIdsList[serviceName]) {
                                returnIdsList[serviceName] = {};
                            }
                            if (!returnIdsList[serviceName][mainKey]) {
                                returnIdsList[serviceName][mainKey] = [];
                            }
                            returnIdsList[serviceName][mainKey] = [
                                ...new Set(returnIdsList[serviceName][mainKey].concat(deletedEntities[mainKey])),
                            ];
                        }
                        Object.keys(deletedEntities).forEach((key) => {
                            deletedEntities[key].forEach((id) => {
                                const hash = `${serviceName}-${key}`;
                                if (!processedIds[hash]) {
                                    processedIds[hash] = new Set();
                                }
                                processedIds[hash].add(id);
                            });
                        });
                        await cascade([
                            {
                                serviceName: serviceName,
                                deleteKeys: deletedEntities,
                            },
                        ], true);
                    });
                    deletePromises.push(...relatedServicesPromises);
                }
                await (0, utils_1.promiseAll)(deletePromises);
            });
            await (0, utils_1.promiseAll)(servicePromises);
            return returnIdsList;
        };
        const result = await cascade(services);
        return [errors.length ? errors : null, result];
    }
    getLinkModuleOrThrow(link) {
        const mods = Object.keys(link).filter((attr) => attr !== "data");
        if (mods.length > 2) {
            throw new Error(`Only two modules can be linked.`);
        }
        const { moduleA, moduleB, moduleAKey, moduleBKey } = this.getLinkDataConfig(link);
        const service = this.getLinkModule(moduleA, moduleAKey, moduleB, moduleBKey);
        if (!service) {
            throw new Error((0, linking_error_1.linkingErrorMessage)({
                moduleA,
                moduleAKey,
                moduleB,
                moduleBKey,
                type: "link",
            }));
        }
        return service;
    }
    getLinkDataConfig(link) {
        const moduleNames = Object.keys(link).filter((attr) => attr !== "data");
        const [moduleA, moduleB] = moduleNames;
        const primaryKeys = Object.keys(link[moduleA]);
        const moduleAKey = primaryKeys.join(",");
        const moduleBKey = Object.keys(link[moduleB]).join(",");
        return {
            moduleA,
            moduleB,
            primaryKeys,
            moduleAKey,
            moduleBKey,
        };
    }
    async create(link) {
        const allLinks = Array.isArray(link) ? link : [link];
        const serviceLinks = new Map();
        for (const link of allLinks) {
            const service = this.getLinkModuleOrThrow(link);
            const { moduleA, moduleB, moduleBKey, primaryKeys } = this.getLinkDataConfig(link);
            if (!serviceLinks.has(service.__definition.key)) {
                serviceLinks.set(service.__definition.key, []);
            }
            const pkValue = primaryKeys.length === 1
                ? link[moduleA][primaryKeys[0]]
                : primaryKeys.map((k) => link[moduleA][k]);
            const fields = [pkValue, link[moduleB][moduleBKey]];
            if ((0, utils_1.isObject)(link.data)) {
                fields.push(link.data);
            }
            serviceLinks.get(service.__definition.key)?.push(fields);
        }
        const promises = [];
        for (const [serviceName, links] of serviceLinks) {
            const service = this.modulesMap.get(serviceName);
            promises.push(service.create(links));
        }
        return (await (0, utils_1.promiseAll)(promises)).flat();
    }
    async dismiss(link) {
        const allLinks = Array.isArray(link) ? link : [link];
        const serviceLinks = new Map();
        for (const link of allLinks) {
            const service = this.getLinkModuleOrThrow(link);
            const { moduleA, moduleB, moduleBKey, primaryKeys } = this.getLinkDataConfig(link);
            if (!serviceLinks.has(service.__definition.key)) {
                serviceLinks.set(service.__definition.key, []);
            }
            const pkValue = primaryKeys.length === 1
                ? link[moduleA][primaryKeys[0]]
                : primaryKeys.map((k) => link[moduleA][k]);
            serviceLinks
                .get(service.__definition.key)
                ?.push([pkValue, link[moduleB][moduleBKey]]);
        }
        const promises = [];
        for (const [serviceName, links] of serviceLinks) {
            const service = this.modulesMap.get(serviceName);
            promises.push(service.dismiss(links));
        }
        return (await (0, utils_1.promiseAll)(promises)).flat();
    }
    async delete(removedServices) {
        return await this.executeCascade(removedServices, "softDelete");
    }
    async restore(removedServices) {
        return await this.executeCascade(removedServices, "restore");
    }
    async list(link, options) {
        const allLinks = Array.isArray(link) ? link : [link];
        const serviceLinks = new Map();
        for (const link of allLinks) {
            const service = this.getLinkModuleOrThrow(link);
            const { moduleA, moduleB } = this.getLinkDataConfig(link);
            if (!serviceLinks.has(service.__definition.key)) {
                serviceLinks.set(service.__definition.key, []);
            }
            serviceLinks.get(service.__definition.key)?.push({
                ...link[moduleA],
                ...link[moduleB],
            });
        }
        const promises = [];
        for (const [serviceName, filters] of serviceLinks) {
            const service = this.modulesMap.get(serviceName);
            promises.push(service
                .list({ $or: filters })
                .then((links) => options?.asLinkDefinition
                ? (0, convert_data_to_link_definition_1.convertRecordsToLinkDefinition)(links, service)
                : links));
        }
        return (await (0, utils_1.promiseAll)(promises)).flat();
    }
}
exports.RemoteLink = RemoteLink;
//# sourceMappingURL=remote-link.js.map