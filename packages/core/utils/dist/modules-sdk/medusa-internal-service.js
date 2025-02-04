"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedusaInternalService = MedusaInternalService;
const common_1 = require("../common");
const dal_1 = require("../dal");
const dml_1 = require("../dml");
const build_query_1 = require("./build-query");
const decorators_1 = require("./decorators");
function MedusaInternalService(rawModel) {
    const model = dml_1.DmlEntity.isDmlEntity(rawModel)
        ? (0, dml_1.toMikroORMEntity)(rawModel)
        : rawModel;
    const injectedRepositoryName = `${(0, common_1.lowerCaseFirst)(model.name)}Repository`;
    const propertyRepositoryName = `__${injectedRepositoryName}__`;
    class AbstractService_ {
        constructor(container) {
            this.__container__ = container;
            this[propertyRepositoryName] = container[injectedRepositoryName];
        }
        static applyFreeTextSearchFilter(filters, config) {
            if ((0, common_1.isDefined)(filters?.q)) {
                config.filters ??= {};
                config.filters[dal_1.FreeTextSearchFilterKey] = {
                    value: filters.q,
                    fromEntity: model.name,
                };
                delete filters.q;
            }
        }
        static retrievePrimaryKeys(entity) {
            return (entity.meta?.primaryKeys ??
                entity.prototype.__meta?.primaryKeys ?? ["id"]);
        }
        static buildUniqueCompositeKeyValue(keys, data) {
            return keys.map((k) => data[k]).join(":");
        }
        /**
         * Only apply top level default ordering as the relation
         * default ordering is already applied through the foreign key
         * @param config
         */
        static applyDefaultOrdering(config) {
            if ((0, common_1.isPresent)(config.order)) {
                return;
            }
            config.order = {};
            const primaryKeys = AbstractService_.retrievePrimaryKeys(model);
            primaryKeys.forEach((primaryKey) => {
                config.order[primaryKey] = "ASC";
            });
        }
        async retrieve(idOrObject, config = {}, sharedContext = {}) {
            const primaryKeys = AbstractService_.retrievePrimaryKeys(model);
            if (!(0, common_1.isDefined)(idOrObject) ||
                ((0, common_1.isString)(idOrObject) && primaryKeys.length > 1) ||
                ((!(0, common_1.isString)(idOrObject) ||
                    ((0, common_1.isObject)(idOrObject) && !idOrObject[primaryKeys[0]])) &&
                    primaryKeys.length === 1)) {
                throw new common_1.MedusaError(common_1.MedusaError.Types.NOT_FOUND, `${primaryKeys.length === 1
                    ? `${(0, common_1.lowerCaseFirst)(model.name) + " - " + primaryKeys[0]}`
                    : `${(0, common_1.lowerCaseFirst)(model.name)} - ${primaryKeys.join(", ")}`} must be defined`);
            }
            let primaryKeysCriteria = {};
            if (primaryKeys.length === 1) {
                primaryKeysCriteria[primaryKeys[0]] = idOrObject;
            }
            else {
                const idOrObject_ = Array.isArray(idOrObject)
                    ? idOrObject
                    : [idOrObject];
                primaryKeysCriteria = idOrObject_.map((primaryKeyValue) => ({
                    $and: primaryKeys.map((key) => ({ [key]: primaryKeyValue[key] })),
                }));
            }
            const queryOptions = (0, build_query_1.buildQuery)(primaryKeysCriteria, config);
            const entities = await this[propertyRepositoryName].find(queryOptions, sharedContext);
            if (!entities?.length) {
                throw new common_1.MedusaError(common_1.MedusaError.Types.NOT_FOUND, `${model.name} with ${primaryKeys.join(", ")}: ${Array.isArray(idOrObject)
                    ? idOrObject.map((v) => [(0, common_1.isString)(v) ? v : Object.values(v)].join(", "))
                    : idOrObject} was not found`);
            }
            return entities[0];
        }
        async list(filters = {}, config = {}, sharedContext = {}) {
            AbstractService_.applyDefaultOrdering(config);
            AbstractService_.applyFreeTextSearchFilter(filters, config);
            const queryOptions = (0, build_query_1.buildQuery)(filters, config);
            return await this[propertyRepositoryName].find(queryOptions, sharedContext);
        }
        async listAndCount(filters = {}, config = {}, sharedContext = {}) {
            AbstractService_.applyDefaultOrdering(config);
            AbstractService_.applyFreeTextSearchFilter(filters, config);
            const queryOptions = (0, build_query_1.buildQuery)(filters, config);
            return await this[propertyRepositoryName].findAndCount(queryOptions, sharedContext);
        }
        async create(data, sharedContext = {}) {
            if (!(0, common_1.isDefined)(data) || (Array.isArray(data) && data.length === 0)) {
                return (Array.isArray(data) ? [] : void 0);
            }
            const data_ = Array.isArray(data) ? data : [data];
            const entities = await this[propertyRepositoryName].create(data_, sharedContext);
            return Array.isArray(data) ? entities : entities[0];
        }
        async update(input, sharedContext = {}) {
            if (!(0, common_1.isDefined)(input) || (Array.isArray(input) && input.length === 0)) {
                return (Array.isArray(input) ? [] : void 0);
            }
            const primaryKeys = AbstractService_.retrievePrimaryKeys(model);
            const inputArray = Array.isArray(input) ? input : [input];
            const toUpdateData = [];
            // Only used when we receive data and no selector
            const keySelectorForDataOnly = {
                $or: [],
            };
            const keySelectorDataMap = new Map();
            for (const input_ of inputArray) {
                if (input_.selector) {
                    const entitiesToUpdate = await this.list(input_.selector, {}, sharedContext);
                    // Create a pair of entity and data to update
                    entitiesToUpdate.forEach((entity) => {
                        toUpdateData.push({
                            entity,
                            update: input_.data,
                        });
                    });
                }
                else {
                    // in case we are manipulating the data, then extract the primary keys as a selector and the rest as the data to update
                    const selector = {};
                    primaryKeys.forEach((key) => {
                        selector[key] = input_[key];
                    });
                    const uniqueCompositeKey = AbstractService_.buildUniqueCompositeKeyValue(primaryKeys, input_);
                    keySelectorDataMap.set(uniqueCompositeKey, input_);
                    keySelectorForDataOnly.$or.push(selector);
                }
            }
            if (keySelectorForDataOnly.$or.length) {
                const entitiesToUpdate = await this.list(keySelectorForDataOnly, {}, sharedContext);
                // Create a pair of entity and data to update
                entitiesToUpdate.forEach((entity) => {
                    const uniqueCompositeKey = AbstractService_.buildUniqueCompositeKeyValue(primaryKeys, entity);
                    toUpdateData.push({
                        entity,
                        update: keySelectorDataMap.get(uniqueCompositeKey),
                    });
                });
                // Only throw for missing entities when we dont have selectors involved as selector by design can return 0 entities
                if (entitiesToUpdate.length !== keySelectorDataMap.size) {
                    const entityName = model.name ?? model;
                    const compositeKeysValuesForFoundEntities = new Set(entitiesToUpdate.map((entity) => {
                        return AbstractService_.buildUniqueCompositeKeyValue(primaryKeys, entity);
                    }));
                    const missingEntityValues = [];
                    [...keySelectorDataMap.keys()].filter((key) => {
                        if (!compositeKeysValuesForFoundEntities.has(key)) {
                            const value = key.replace(/:/gi, " - ");
                            missingEntityValues.push(value);
                        }
                    });
                    throw new common_1.MedusaError(common_1.MedusaError.Types.NOT_FOUND, `${entityName} with ${primaryKeys.join(", ")} "${missingEntityValues.join(", ")}" not found`);
                }
            }
            return await this[propertyRepositoryName].update(toUpdateData, sharedContext);
        }
        async delete(idOrSelector, sharedContext = {}) {
            if (!(0, common_1.isDefined)(idOrSelector) ||
                (Array.isArray(idOrSelector) && !idOrSelector.length)) {
                return;
            }
            const primaryKeys = AbstractService_.retrievePrimaryKeys(model);
            if ((Array.isArray(idOrSelector) && idOrSelector.length === 0) ||
                (((0, common_1.isString)(idOrSelector) ||
                    (Array.isArray(idOrSelector) && (0, common_1.isString)(idOrSelector[0]))) &&
                    primaryKeys.length > 1)) {
                throw new common_1.MedusaError(common_1.MedusaError.Types.NOT_FOUND, `${primaryKeys.length === 1
                    ? `"${(0, common_1.lowerCaseFirst)(model.name) + " - " + primaryKeys[0]}"`
                    : `${(0, common_1.lowerCaseFirst)(model.name)} - ${primaryKeys.join(", ")}`} must be defined`);
            }
            const deleteCriteria = {
                $or: [],
            };
            if ((0, common_1.isObject)(idOrSelector) && "selector" in idOrSelector) {
                const entitiesToDelete = await this.list(idOrSelector.selector, {
                    select: primaryKeys,
                }, sharedContext);
                for (const entity of entitiesToDelete) {
                    const criteria = {};
                    primaryKeys.forEach((key) => {
                        criteria[key] = entity[key];
                    });
                    deleteCriteria.$or.push(criteria);
                }
            }
            else {
                const primaryKeysValues = Array.isArray(idOrSelector)
                    ? idOrSelector
                    : [idOrSelector];
                deleteCriteria.$or = primaryKeysValues.map((primaryKeyValue) => {
                    const criteria = {};
                    if ((0, common_1.isObject)(primaryKeyValue)) {
                        Object.entries(primaryKeyValue).forEach(([key, value]) => {
                            criteria[key] = value;
                        });
                    }
                    else {
                        criteria[primaryKeys[0]] = primaryKeyValue;
                    }
                    // TODO: Revisit
                    /*primaryKeys.forEach((key) => {
                      /!*if (
                        isObject(primaryKeyValue) &&
                        !isDefined(primaryKeyValue[key]) &&
                        // primaryKeys.length > 1
                      ) {
                        throw new MedusaError(
                          MedusaError.Types.INVALID_DATA,
                          `Composite key must contain all primary key fields: ${primaryKeys.join(
                            ", "
                          )}. Found: ${Object.keys(primaryKeyValue)}`
                        )
                      }*!/
          
                      criteria[key] = isObject(primaryKeyValue)
                        ? primaryKeyValue[key]
                        : primaryKeyValue
                    })*/
                    return criteria;
                });
            }
            await this[propertyRepositoryName].delete(deleteCriteria, sharedContext);
        }
        async softDelete(idsOrFilter, sharedContext = {}) {
            if ((Array.isArray(idsOrFilter) && !idsOrFilter.length) ||
                (!Array.isArray(idsOrFilter) && !idsOrFilter)) {
                return [[], {}];
            }
            return await this[propertyRepositoryName].softDelete(idsOrFilter, sharedContext);
        }
        async restore(idsOrFilter, sharedContext = {}) {
            return await this[propertyRepositoryName].restore(idsOrFilter, sharedContext);
        }
        async upsert(data, sharedContext = {}) {
            const data_ = Array.isArray(data) ? data : [data];
            const entities = await this[propertyRepositoryName].upsert(data_, sharedContext);
            return Array.isArray(data) ? entities : entities[0];
        }
        async upsertWithReplace(data, config = {
            relations: [],
        }, sharedContext = {}) {
            const data_ = Array.isArray(data) ? data : [data];
            const { entities, performedActions } = await this[propertyRepositoryName].upsertWithReplace(data_, config, sharedContext);
            return {
                entities: Array.isArray(data) ? entities : entities[0],
                performedActions,
            };
        }
    }
    __decorate([
        (0, decorators_1.InjectManager)(propertyRepositoryName),
        __param(2, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "retrieve", null);
    __decorate([
        (0, decorators_1.InjectManager)(propertyRepositoryName),
        __param(2, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "list", null);
    __decorate([
        (0, decorators_1.InjectManager)(propertyRepositoryName),
        __param(2, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "listAndCount", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "create", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "update", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "delete", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "softDelete", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "restore", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(1, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "upsert", null);
    __decorate([
        (0, decorators_1.InjectTransactionManager)(propertyRepositoryName),
        __param(2, (0, decorators_1.MedusaContext)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AbstractService_.prototype, "upsertWithReplace", null);
    return AbstractService_;
}
//# sourceMappingURL=medusa-internal-service.js.map