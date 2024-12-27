"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSystem = void 0;
const core_1 = require("@mikro-orm/core");
const entity_builder_1 = require("../../entity-builder");
const create_mikro_orm_entity_1 = require("../../helpers/create-mikro-orm-entity");
const pg_god_1 = require("pg-god");
const dal_1 = require("../../../dal");
const utils_1 = require("../utils");
const common_1 = require("../../../common");
const path_1 = require("path");
exports.fileSystem = new common_1.FileSystem((0, path_1.join)(__dirname, "../../integration-tests-migrations-enum"));
describe("EntityBuilder", () => {
    const dbName = "EntityBuilder-default";
    let orm;
    let User;
    afterAll(async () => {
        await exports.fileSystem.cleanup();
    });
    beforeEach(async () => {
        core_1.MetadataStorage.clear();
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            points: entity_builder_1.model.number().default(0).nullable(),
            tax_rate: entity_builder_1.model.float().default(0).nullable(),
        });
        [User] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user]);
        await (0, pg_god_1.createDatabase)({ databaseName: dbName }, utils_1.pgGodCredentials);
        orm = await core_1.MikroORM.init({
            entities: [User],
            tsNode: true,
            dbName,
            password: utils_1.pgGodCredentials.password,
            host: utils_1.pgGodCredentials.host,
            user: utils_1.pgGodCredentials.user,
            type: "postgresql",
            migrations: {
                generator: dal_1.CustomTsMigrationGenerator,
                path: exports.fileSystem.basePath,
            },
        });
        const migrator = orm.getMigrator();
        await migrator.createMigration();
        await migrator.up();
    });
    afterEach(async () => {
        await orm.close();
        await (0, pg_god_1.dropDatabase)({ databaseName: dbName, errorIfNonExist: false }, utils_1.pgGodCredentials);
    });
    it("set the points to default value before creating the record", async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
        });
        expect(user1.points).toBe(undefined);
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            points: 0,
            tax_rate: 0,
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
        });
    });
    it("set the points to null when explicitly set to null", async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
            points: null,
        });
        expect(user1.points).toBe(null);
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            points: null,
            tax_rate: 0,
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
        });
    });
    it("set the points to null during updated", async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
        });
        expect(user1.points).toBe(undefined);
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        user1.points = null;
        await manager.persistAndFlush([user1]);
        const user = await manager.findOne(User, {
            id: user1.id,
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            points: null,
            tax_rate: 0,
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
        });
    });
    it("set the tax rate as a float value", async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
            tax_rate: 1.2122,
        });
        expect(user1.tax_rate).toEqual(1.2122);
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            points: 0,
            tax_rate: 1.2122,
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
        });
    });
});
//# sourceMappingURL=entity.spec.js.map