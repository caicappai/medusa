"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikroOrmBaseTreeRepository = exports.MikroOrmBaseRepository = exports.MikroOrmBase = void 0;
exports.mikroOrmBaseRepositoryFactory = mikroOrmBaseRepositoryFactory;
const core_1 = require("@mikro-orm/core");
const common_1 = require("../../common");
const dml_1 = require("../../dml");
const build_query_1 = require("../../modules-sdk/build-query");
const utils_1 = require("../utils");
const db_error_mapper_1 = require("./db-error-mapper");
const mikro_orm_serializer_1 = require("./mikro-orm-serializer");
const utils_2 = require("./utils");
class MikroOrmBase {
    constructor({ manager }) {
        this.manager_ = manager;
    }
    getFreshManager() {
        return (this.manager_.fork
            ? this.manager_.fork()
            : this.manager_);
    }
    getActiveManager({ transactionManager, manager, } = {}) {
        return (transactionManager ?? manager ?? this.getFreshManager());
    }
    async transaction(task, options = {}) {
        const freshManager = this.getFreshManager
            ? this.getFreshManager()
            : this.manager_;
        return await (0, utils_1.transactionWrapper)(freshManager, task, options).catch(db_error_mapper_1.dbErrorMapper);
    }
    async serialize(data, options) {
        return await (0, mikro_orm_serializer_1.mikroOrmSerializer)(data, options);
    }
}
exports.MikroOrmBase = MikroOrmBase;
/**
 * Privileged extends of the abstract classes unless most of the methods can't be implemented
 * in your repository. This base repository is also used to provide a base repository
 * injection if needed to be able to use the common methods without being related to an entity.
 * In this case, none of the method will be implemented except the manager and transaction
 * related ones.
 */
class MikroOrmBaseRepository extends MikroOrmBase {
    constructor(...args) {
        // @ts-ignore
        super(...arguments);
    }
    static buildUniqueCompositeKeyValue(keys, data) {
        return keys.map((k) => data[k]).join("_");
    }
    static retrievePrimaryKeys(entity) {
        return (entity.meta?.primaryKeys ??
            entity.prototype.__meta.primaryKeys ?? ["id"]);
    }
    /**
     * When using the select-in strategy, the populated fields are not selected by default unlike when using the joined strategy.
     * This method will add the populated fields to the fields array if they are not already specifically selected.
     *
     * TODO: Revisit if this is still needed in v6 as it seems to be a workaround for a bug in v5
     *
     * @param {FindOptions<any>} findOptions
     */
    static compensateRelationFieldsSelectionFromLoadStrategy({ findOptions, }) {
        const loadStrategy = findOptions?.options?.strategy;
        if (loadStrategy !== core_1.LoadStrategy.SELECT_IN) {
            return;
        }
        findOptions.options ??= {};
        const populate = findOptions.options.populate ?? [];
        const fields = findOptions.options.fields ?? [];
        populate.forEach((populateRelation) => {
            if (fields.some((field) => field.startsWith(populateRelation + "."))) {
                return;
            }
            // If there is no specific fields selected for the relation but the relation is populated, we select all fields
            fields.push(populateRelation + ".*");
        });
    }
    create(data, context) {
        throw new Error("Method not implemented.");
    }
    update(data, context) {
        throw new Error("Method not implemented.");
    }
    delete(idsOrPKs, context) {
        throw new Error("Method not implemented.");
    }
    find(options, context) {
        throw new Error("Method not implemented.");
    }
    findAndCount(options, context) {
        throw new Error("Method not implemented.");
    }
    upsert(data, context = {}) {
        throw new Error("Method not implemented.");
    }
    upsertWithReplace(data, config = {
        relations: [],
    }, context = {}) {
        throw new Error("Method not implemented.");
    }
    async softDelete(filters, sharedContext = {}) {
        const entities = await this.find({ where: filters }, sharedContext);
        const date = new Date();
        const manager = this.getActiveManager(sharedContext);
        await (0, utils_2.mikroOrmUpdateDeletedAtRecursively)(manager, entities, date);
        const softDeletedEntitiesMap = (0, utils_1.getSoftDeletedCascadedEntitiesIdsMappedBy)({
            entities,
        });
        return [entities, softDeletedEntitiesMap];
    }
    async restore(idsOrFilter, sharedContext = {}) {
        const query = (0, build_query_1.buildQuery)(idsOrFilter, {
            withDeleted: true,
        });
        const entities = await this.find(query, sharedContext);
        const manager = this.getActiveManager(sharedContext);
        await (0, utils_2.mikroOrmUpdateDeletedAtRecursively)(manager, entities, null);
        const softDeletedEntitiesMap = (0, utils_1.getSoftDeletedCascadedEntitiesIdsMappedBy)({
            entities,
            restored: true,
        });
        return [entities, softDeletedEntitiesMap];
    }
    applyFreeTextSearchFilters(findOptions, retrieveConstraintsToApply) {
        if (!("q" in findOptions.where) || !findOptions.where.q) {
            delete findOptions.where.q;
            return;
        }
        const q = findOptions.where.q;
        delete findOptions.where.q;
        findOptions.where = {
            $and: [findOptions.where, { $or: retrieveConstraintsToApply(q) }],
        };
    }
}
exports.MikroOrmBaseRepository = MikroOrmBaseRepository;
class MikroOrmBaseTreeRepository extends MikroOrmBase {
    constructor() {
        // @ts-ignore
        super(...arguments);
    }
    find(options, transformOptions, context) {
        throw new Error("Method not implemented.");
    }
    findAndCount(options, transformOptions, context) {
        throw new Error("Method not implemented.");
    }
    create(data, context) {
        throw new Error("Method not implemented.");
    }
    update(data, context) {
        throw new Error("Method not implemented.");
    }
    delete(ids, context) {
        throw new Error("Method not implemented.");
    }
}
exports.MikroOrmBaseTreeRepository = MikroOrmBaseTreeRepository;
function mikroOrmBaseRepositoryFactory(entity) {
    const mikroOrmEntity = (0, dml_1.toMikroORMEntity)(entity);
    class MikroOrmAbstractBaseRepository_ extends MikroOrmBaseRepository {
        // @ts-ignore
        constructor(...args) {
            // @ts-ignore
            super(...arguments);
            this.entity = mikroOrmEntity;
            return new Proxy(this, {
                get: (target, prop) => {
                    if (typeof target[prop] === "function") {
                        return (...args) => {
                            const res = target[prop].bind(target)(...args);
                            if (res instanceof Promise) {
                                return res.catch(db_error_mapper_1.dbErrorMapper);
                            }
                            return res;
                        };
                    }
                    return target[prop];
                },
            });
        }
        async create(data, context) {
            const manager = this.getActiveManager(context);
            const entities = data.map((data_) => {
                return manager.create(this.entity, data_);
            });
            manager.persist(entities);
            return entities;
        }
        /**
         * On a many to many relation, we expect to detach all the pivot items in case an empty array is provided.
         * In that case, this relation needs to be init as well as its counter part in order to be
         * able to perform the removal action.
         *
         * This action performs the initialization in the provided entity and therefore mutate in place.
         *
         * @param {{entity, update}[]} data
         * @param context
         * @private
         */
        async initManyToManyToDetachAllItemsIfNeeded(data, context) {
            const manager = this.getActiveManager(context);
            const relations = manager
                .getDriver()
                .getMetadata()
                .get(this.entity.name).relations;
            // In case an empty array is provided for a collection relation of type m:n, this relation needs to be init in order to be
            // able to perform an application cascade action.
            const collectionsToRemoveAllFrom = new Map();
            data.forEach(({ update }) => Object.keys(update).filter((key) => {
                const relation = relations.find((relation) => relation.name === key);
                const shouldInit = relation &&
                    relation.reference === core_1.ReferenceType.MANY_TO_MANY &&
                    Array.isArray(update[key]) &&
                    !update[key].length;
                if (shouldInit) {
                    collectionsToRemoveAllFrom.set(key, {
                        name: key,
                        mappedBy: relations.find((r) => r.name === key)?.mappedBy,
                    });
                }
            }));
            for (const [collectionToRemoveAllFrom, descriptor,] of collectionsToRemoveAllFrom) {
                await (0, common_1.promiseAll)(data.map(async ({ entity }) => {
                    if (!descriptor.mappedBy) {
                        return await entity[collectionToRemoveAllFrom].init();
                    }
                    await entity[collectionToRemoveAllFrom].init();
                    const items = entity[collectionToRemoveAllFrom];
                    for (const item of items) {
                        await item[descriptor.mappedBy].init();
                    }
                }));
            }
        }
        async update(data, context) {
            const manager = this.getActiveManager(context);
            await this.initManyToManyToDetachAllItemsIfNeeded(data, context);
            data.map((_, index) => {
                manager.assign(data[index].entity, data[index].update);
                manager.persist(data[index].entity);
            });
            return data.map((d) => d.entity);
        }
        async delete(filters, context) {
            const manager = this.getActiveManager(context);
            await manager.nativeDelete(this.entity, filters);
        }
        async find(options = { where: {} }, context) {
            const manager = this.getActiveManager(context);
            const findOptions_ = { ...options };
            findOptions_.options ??= {};
            if (!("strategy" in findOptions_.options)) {
                if (findOptions_.options.limit != null || findOptions_.options.offset) {
                    Object.assign(findOptions_.options, {
                        strategy: core_1.LoadStrategy.SELECT_IN,
                    });
                }
                else {
                    Object.assign(findOptions_.options, {
                        strategy: core_1.LoadStrategy.JOINED,
                    });
                }
            }
            MikroOrmBaseRepository.compensateRelationFieldsSelectionFromLoadStrategy({
                findOptions: findOptions_,
            });
            return (await manager.find(this.entity, findOptions_.where, findOptions_.options));
        }
        async findAndCount(findOptions = { where: {} }, context = {}) {
            const manager = this.getActiveManager(context);
            const findOptions_ = { ...findOptions };
            findOptions_.options ??= {};
            Object.assign(findOptions_.options, {
                strategy: core_1.LoadStrategy.SELECT_IN,
            });
            MikroOrmBaseRepository.compensateRelationFieldsSelectionFromLoadStrategy({
                findOptions: findOptions_,
            });
            return (await manager.findAndCount(this.entity, findOptions_.where, findOptions_.options // MikroOptions<T>
            ));
        }
        async upsert(data, context = {}) {
            const manager = this.getActiveManager(context);
            const primaryKeys = MikroOrmAbstractBaseRepository_.retrievePrimaryKeys(this.entity);
            let primaryKeysCriteria = [];
            if (primaryKeys.length === 1) {
                const primaryKeyValues = data
                    .map((d) => d[primaryKeys[0]])
                    .filter(Boolean);
                if (primaryKeyValues.length) {
                    primaryKeysCriteria.push({
                        [primaryKeys[0]]: primaryKeyValues,
                    });
                }
            }
            else {
                primaryKeysCriteria = data.map((d) => ({
                    $and: primaryKeys.map((key) => ({ [key]: d[key] })),
                }));
            }
            let allEntities = [];
            if (primaryKeysCriteria.length) {
                allEntities = await Promise.all(primaryKeysCriteria.map(async (criteria) => await this.find({ where: criteria }, context)));
            }
            const existingEntities = allEntities.flat();
            const existingEntitiesMap = new Map();
            existingEntities.forEach((entity) => {
                if (entity) {
                    const key = MikroOrmAbstractBaseRepository_.buildUniqueCompositeKeyValue(primaryKeys, entity);
                    existingEntitiesMap.set(key, entity);
                }
            });
            const upsertedEntities = [];
            const createdEntities = [];
            const updatedEntities = [];
            data.forEach((data_) => {
                // In case the data provided are just strings, then we build an object with the primary key as the key and the data as the valuecd -
                const key = MikroOrmAbstractBaseRepository_.buildUniqueCompositeKeyValue(primaryKeys, data_);
                const existingEntity = existingEntitiesMap.get(key);
                if (existingEntity) {
                    const updatedType = manager.assign(existingEntity, data_);
                    updatedEntities.push(updatedType);
                }
                else {
                    const newEntity = manager.create(this.entity, data_);
                    createdEntities.push(newEntity);
                }
            });
            if (createdEntities.length) {
                manager.persist(createdEntities);
                upsertedEntities.push(...createdEntities);
            }
            if (updatedEntities.length) {
                manager.persist(updatedEntities);
                upsertedEntities.push(...updatedEntities);
            }
            // TODO return the all, created, updated entities
            return upsertedEntities;
        }
        // UpsertWithReplace does several things to simplify module implementation.
        // For each entry of your base entity, it will go through all one-to-many and many-to-many relations, and it will do a diff between what is passed and what is in the database.
        // For each relation, it create new entries (without an ID), it will associate existing entries (with only an ID), and it will update existing entries (with an ID and other fields).
        // Finally, it will delete the relation entries that were omitted in the new data.
        // The response is a POJO of the data that was written to the DB, including all new IDs. The order is preserved with the input.
        // Limitations: We expect that IDs are used as primary keys, and we don't support composite keys.
        // We only support 1-level depth of upserts. We don't support custom fields on the many-to-many pivot tables for now
        async upsertWithReplace(data, config = {
            relations: [],
        }, context = {}) {
            const performedActions = {
                created: {},
                updated: {},
                deleted: {},
            };
            if (!data.length) {
                return { entities: [], performedActions };
            }
            // We want to convert a potential ORM model to a POJO
            const normalizedData = await this.serialize(data);
            const manager = this.getActiveManager(context);
            // Handle the relations
            const allRelations = manager
                .getDriver()
                .getMetadata()
                .get(this.entity.name).relations;
            const nonexistentRelations = (0, common_1.arrayDifference)(config.relations ?? [], allRelations.map((r) => r.name));
            if (nonexistentRelations.length) {
                throw new common_1.MedusaError(common_1.MedusaError.Types.INVALID_DATA, `Nonexistent relations were passed during upsert: ${nonexistentRelations}`);
            }
            // We want to response with all the data including the IDs in the same order as the input. We also include data that was passed but not processed.
            const reconstructedResponse = [];
            const originalDataMap = new Map();
            // Create only the top-level entity without the relations first
            const toUpsert = normalizedData.map((entry) => {
                // Make a copy of the data and remove undefined fields. The data is already a POJO due to the serialization above
                const entryCopy = JSON.parse(JSON.stringify(entry));
                const reconstructedEntry = {};
                allRelations?.forEach((relation) => {
                    reconstructedEntry[relation.name] = this.handleRelationAssignment_(relation, entryCopy);
                });
                const mainEntity = this.getEntityWithId(manager, this.entity.name, entryCopy);
                reconstructedResponse.push({ ...mainEntity, ...reconstructedEntry });
                originalDataMap.set(mainEntity.id, entry);
                return mainEntity;
            });
            let { orderedEntities: upsertedTopLevelEntities, performedActions: performedActions_, } = await this.upsertMany_(manager, this.entity.name, toUpsert);
            this.mergePerformedActions(performedActions, performedActions_);
            await (0, common_1.promiseAll)(upsertedTopLevelEntities
                .map((entityEntry, i) => {
                const originalEntry = originalDataMap.get(entityEntry.id);
                const reconstructedEntry = reconstructedResponse[i];
                return allRelations?.map(async (relation) => {
                    const relationName = relation.name;
                    if (!config.relations?.includes(relationName)) {
                        return;
                    }
                    // TODO: Handle ONE_TO_ONE
                    // One to one and Many to one are handled outside of the assignment as they need to happen before the main entity is created
                    if (relation.reference === core_1.ReferenceType.ONE_TO_ONE ||
                        relation.reference === core_1.ReferenceType.MANY_TO_ONE) {
                        return;
                    }
                    const { entities, performedActions: performedActions_ } = await this.assignCollectionRelation_(manager, { ...originalEntry, id: entityEntry.id }, relation);
                    this.mergePerformedActions(performedActions, performedActions_);
                    reconstructedEntry[relationName] = entities;
                    return;
                });
            })
                .flat());
            // // We want to populate the identity map with the data that was written to the DB, and return an entity object
            // return reconstructedResponse.map((r) =>
            //   manager.create(entity, r, { persist: false })
            // )
            return { entities: reconstructedResponse, performedActions };
        }
        mergePerformedActions(performedActions, newPerformedActions) {
            Object.entries(newPerformedActions).forEach(([action, entities]) => {
                Object.entries(entities).forEach(([entityName, entityData]) => {
                    performedActions[action][entityName] ??= [];
                    performedActions[action][entityName].push(...entityData);
                });
            });
        }
        // FUTURE: We can make this performant by only aggregating the operations, but only executing them at the end.
        async assignCollectionRelation_(manager, data, relation) {
            const dataForRelation = data[relation.name];
            const performedActions = {
                created: {},
                updated: {},
                deleted: {},
            };
            // If the field is not set, we ignore it. Null and empty arrays are a valid input and are handled below
            if (dataForRelation === undefined) {
                return { entities: [], performedActions };
            }
            // Make sure the data is correctly initialized with IDs before using it
            const normalizedData = dataForRelation.map((normalizedItem) => {
                return this.getEntityWithId(manager, relation.type, normalizedItem);
            });
            if (relation.reference === core_1.ReferenceType.MANY_TO_MANY) {
                const currentPivotColumn = relation.inverseJoinColumns[0];
                const parentPivotColumn = relation.joinColumns[0];
                if (!normalizedData.length) {
                    await manager.nativeDelete(relation.pivotEntity, {
                        [parentPivotColumn]: data.id,
                    });
                    return { entities: normalizedData, performedActions };
                }
                const { performedActions: performedActions_ } = await this.upsertMany_(manager, relation.type, normalizedData, true);
                this.mergePerformedActions(performedActions, performedActions_);
                const pivotData = normalizedData.map((currModel) => {
                    return {
                        [parentPivotColumn]: data.id,
                        [currentPivotColumn]: currModel.id,
                    };
                });
                const qb = manager.qb(relation.pivotEntity);
                await qb.insert(pivotData).onConflict().ignore().execute();
                await manager.nativeDelete(relation.pivotEntity, {
                    [parentPivotColumn]: data.id,
                    [currentPivotColumn]: {
                        $nin: pivotData.map((d) => d[currentPivotColumn]),
                    },
                });
                return { entities: normalizedData, performedActions };
            }
            if (relation.reference === core_1.ReferenceType.ONE_TO_MANY) {
                const joinColumns = relation.targetMeta?.properties[relation.mappedBy]?.joinColumns;
                const joinColumnsConstraints = {};
                joinColumns?.forEach((joinColumn, index) => {
                    const referencedColumnName = relation.referencedColumnNames[index];
                    joinColumnsConstraints[joinColumn] = data[referencedColumnName];
                });
                const toDeleteEntities = await manager.find(relation.type, {
                    ...joinColumnsConstraints,
                    id: { $nin: normalizedData.map((d) => d.id) },
                }, {
                    fields: ["id"],
                });
                const toDeleteIds = toDeleteEntities.map((d) => d.id);
                await manager.nativeDelete(relation.type, {
                    ...joinColumnsConstraints,
                    id: { $in: toDeleteIds },
                });
                if (toDeleteEntities.length) {
                    performedActions.deleted[relation.type] ??= [];
                    performedActions.deleted[relation.type].push(...toDeleteEntities.map((d) => ({ id: d.id })));
                }
                if (normalizedData.length) {
                    normalizedData.forEach((normalizedDataItem) => {
                        Object.assign(normalizedDataItem, {
                            ...joinColumnsConstraints,
                        });
                    });
                    const { performedActions: performedActions_ } = await this.upsertMany_(manager, relation.type, normalizedData);
                    this.mergePerformedActions(performedActions, performedActions_);
                }
                return { entities: normalizedData, performedActions };
            }
            return { entities: normalizedData, performedActions };
        }
        handleRelationAssignment_(relation, entryCopy) {
            const originalData = entryCopy[relation.name];
            delete entryCopy[relation.name];
            if (originalData === undefined) {
                return undefined;
            }
            // If it is a many-to-one we ensure the ID is set for when we want to set/unset an association
            if (relation.reference === core_1.ReferenceType.MANY_TO_ONE) {
                if (originalData === null) {
                    entryCopy[relation.joinColumns[0]] = null;
                    return null;
                }
                // The relation can either be a primitive or the entity object, depending on how it's defined on the model
                let relationId;
                if ((0, common_1.isString)(originalData)) {
                    relationId = originalData;
                }
                else if ("id" in originalData) {
                    relationId = originalData.id;
                }
                // We don't support creating many-to-one relations, so we want to throw if someone doesn't pass the ID
                if (!relationId) {
                    throw new common_1.MedusaError(common_1.MedusaError.Types.INVALID_DATA, `Many-to-one relation ${relation.name} must be set with an ID`);
                }
                entryCopy[relation.joinColumns[0]] = relationId;
                return originalData;
            }
            return undefined;
        }
        // Returns a POJO object with the ID populated from the entity model hooks
        getEntityWithId(manager, entityName, data) {
            // We set the id to undefined to make sure the entity isn't fetched from the entity map if it is an update,
            // giving us incorrect data for the bignumberdata field (I though managed: false and persist: false would already do this)
            const created = manager.create(entityName, { ...data, id: undefined }, {
                managed: false,
                persist: false,
            });
            const resp = {
                // `create` will omit non-existent fields, but we want to pass the data the user provided through so the correct errors get thrown
                ...data,
                ...created.__helper.__bignumberdata,
                id: data.id ?? created.id,
            };
            // Non-persist relation columns should be removed before we do the upsert.
            Object.entries(created.__helper?.__meta.properties ?? {})
                .filter(([_, propDef]) => propDef.persist === false &&
                propDef.reference === core_1.ReferenceType.MANY_TO_ONE)
                .forEach(([key]) => {
                delete resp[key];
            });
            return resp;
        }
        async upsertMany_(manager, entityName, entries, skipUpdate = false) {
            const selectQb = manager.qb(entityName);
            const existingEntities = await selectQb.select("*").where({
                id: { $in: entries.map((d) => d.id) },
            });
            const existingEntitiesMap = new Map(existingEntities.map((e) => [e.id, e]));
            const orderedEntities = [];
            const performedActions = {
                created: {},
                updated: {},
                deleted: {},
            };
            await (0, common_1.promiseAll)(entries.map(async (data) => {
                const existingEntity = existingEntitiesMap.get(data.id);
                orderedEntities.push(data);
                if (existingEntity) {
                    if (skipUpdate) {
                        return;
                    }
                    await manager.nativeUpdate(entityName, { id: data.id }, data);
                    performedActions.updated[entityName] ??= [];
                    performedActions.updated[entityName].push({ id: data.id });
                }
                else {
                    const qb = manager.qb(entityName);
                    if (skipUpdate) {
                        const res = await qb
                            .insert(data)
                            .onConflict()
                            .ignore()
                            .execute("all", true);
                        if (res) {
                            performedActions.created[entityName] ??= [];
                            performedActions.created[entityName].push({ id: data.id });
                        }
                    }
                    else {
                        await manager.insert(entityName, data);
                        performedActions.created[entityName] ??= [];
                        performedActions.created[entityName].push({ id: data.id });
                        // await manager.insert(entityName, data)
                    }
                }
            }));
            return { orderedEntities, performedActions };
        }
        async restore(filters, sharedContext = {}) {
            if (Array.isArray(filters) && !filters.filter(Boolean).length) {
                return [[], {}];
            }
            if (!filters) {
                return [[], {}];
            }
            const normalizedFilters = this.normalizeFilters(filters);
            return await super.restore(normalizedFilters, sharedContext);
        }
        async softDelete(filters, sharedContext = {}) {
            if (Array.isArray(filters) && !filters.filter(Boolean).length) {
                return [[], {}];
            }
            if (!filters) {
                return [[], {}];
            }
            const normalizedFilters = this.normalizeFilters(filters);
            return await super.softDelete(normalizedFilters, sharedContext);
        }
        normalizeFilters(filters) {
            const primaryKeys = MikroOrmAbstractBaseRepository_.retrievePrimaryKeys(this.entity);
            const filterArray = Array.isArray(filters) ? filters : [filters];
            const normalizedFilters = {
                $or: filterArray.map((filter) => {
                    // TODO: add support for composite keys
                    if ((0, common_1.isString)(filter)) {
                        return { [primaryKeys[0]]: filter };
                    }
                    return filter;
                }),
            };
            return normalizedFilters;
        }
    }
    return MikroOrmAbstractBaseRepository_;
}
//# sourceMappingURL=mikro-orm-repository.js.map