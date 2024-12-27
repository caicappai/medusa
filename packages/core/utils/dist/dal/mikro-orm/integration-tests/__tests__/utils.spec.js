"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const core_1 = require("@mikro-orm/core");
const utils_2 = require("../__fixtures__/utils");
const pg_god_1 = require("pg-god");
const database_1 = require("../__fixtures__/database");
const dbName = "mikroorm-utils-integration-1";
jest.mock("@mikro-orm/core", () => ({
    ...jest.requireActual("@mikro-orm/core"),
    wrap: jest.fn().mockImplementation((entity) => ({
        ...entity,
        init: jest.fn().mockResolvedValue(entity),
        __helper: {
            isInitialized: jest.fn().mockReturnValue(true),
        },
    })),
}));
describe("mikroOrmUpdateDeletedAtRecursively", () => {
    describe("using circular cascading", () => {
        let orm;
        beforeEach(async () => {
            await (0, pg_god_1.dropDatabase)({ databaseName: dbName, errorIfNonExist: false }, database_1.pgGodCredentials);
            orm = await core_1.MikroORM.init({
                entities: [
                    utils_2.Entity1,
                    utils_2.Entity2,
                    utils_2.RecursiveEntity1,
                    utils_2.RecursiveEntity2,
                    utils_2.DeepRecursiveEntity1,
                    utils_2.DeepRecursiveEntity2,
                    utils_2.DeepRecursiveEntity3,
                    utils_2.DeepRecursiveEntity4,
                    utils_2.InternalCircularDependencyEntity1,
                ],
                clientUrl: (0, database_1.getDatabaseURL)(dbName),
                type: "postgresql",
            });
            const generator = orm.getSchemaGenerator();
            await generator.ensureDatabase();
            await generator.createSchema();
        });
        afterEach(async () => {
            const generator = orm.getSchemaGenerator();
            await generator.dropSchema();
            await orm.close(true);
        });
        it("should successfully mark the entities deleted_at recursively", async () => {
            const manager = orm.em.fork();
            const entity1 = new utils_2.Entity1({ id: "1", deleted_at: null });
            const entity2 = new utils_2.Entity2({
                id: "2",
                deleted_at: null,
                entity1: entity1,
            });
            entity1.entity2.add(entity2);
            manager.persist(entity1);
            manager.persist(entity2);
            const deletedAt = new Date();
            await (0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity1], deletedAt);
            expect(!!entity1.deleted_at).toEqual(true);
            expect(!!entity2.deleted_at).toEqual(true);
        });
        it("should successfully mark the entities deleted_at recursively with internal parent/child relation", async () => {
            const manager = orm.em.fork();
            const entity1 = new utils_2.InternalCircularDependencyEntity1({
                id: "1",
                deleted_at: null,
            });
            const childEntity1 = new utils_2.InternalCircularDependencyEntity1({
                id: "2",
                deleted_at: null,
                parent: entity1,
            });
            manager.persist(entity1);
            manager.persist(childEntity1);
            const deletedAt = new Date();
            await (0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity1], deletedAt);
            expect(!!entity1.deleted_at).toEqual(true);
            expect(!!childEntity1.deleted_at).toEqual(true);
        });
        it("should throw an error when a circular dependency is detected", async () => {
            const manager = orm.em.fork();
            const entity1 = new utils_2.RecursiveEntity1({ id: "1", deleted_at: null });
            const entity2 = new utils_2.RecursiveEntity2({
                id: "2",
                deleted_at: null,
                entity1: entity1,
            });
            await expect((0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity2], new Date())).rejects.toThrow("Unable to soft delete the entity1. Circular dependency detected: RecursiveEntity2 -> entity1 -> RecursiveEntity1 -> entity2 -> RecursiveEntity2");
        });
        it("should throw an error when a circular dependency is detected even at a deeper level", async () => {
            const manager = orm.em.fork();
            const entity1 = new utils_2.DeepRecursiveEntity1({ id: "1", deleted_at: null });
            const entity3 = new utils_2.DeepRecursiveEntity3({
                id: "3",
                deleted_at: null,
                entity1: entity1,
            });
            const entity2 = new utils_2.DeepRecursiveEntity2({
                id: "2",
                deleted_at: null,
                entity1: entity1,
                entity3: entity3,
            });
            const entity4 = new utils_2.DeepRecursiveEntity4({
                id: "4",
                deleted_at: null,
                entity1: entity1,
            });
            await expect((0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity1], new Date())).rejects.toThrow("Unable to soft delete the entity2. Circular dependency detected: DeepRecursiveEntity1 -> entity2 -> DeepRecursiveEntity2 -> entity3 -> DeepRecursiveEntity3 -> entity1 -> DeepRecursiveEntity1");
            await expect((0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity2], new Date())).rejects.toThrow("Unable to soft delete the entity3. Circular dependency detected: DeepRecursiveEntity2 -> entity3 -> DeepRecursiveEntity3 -> entity1 -> DeepRecursiveEntity1 -> entity2 -> DeepRecursiveEntity2");
            await (0, utils_1.mikroOrmUpdateDeletedAtRecursively)(manager, [entity4], new Date());
            expect(entity4.deleted_at).not.toBeNull();
            expect(entity1.deleted_at).toBeNull();
            expect(entity2.deleted_at).toBeNull();
            expect(entity3.deleted_at).toBeNull();
        });
    });
});
//# sourceMappingURL=utils.spec.js.map