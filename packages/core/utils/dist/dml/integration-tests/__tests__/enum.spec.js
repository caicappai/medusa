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
describe("EntityBuilder | enum", () => {
    const dbName = "EntityBuilder-enum";
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
            role: entity_builder_1.model.enum(["admin", "moderator", "editor"]),
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
    it(`should handle the enum property`, async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
            role: "admin",
        });
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            role: "admin",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
        });
    });
    it(`should fail to handle the enum property`, async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
            role: "test",
        });
        const err = await manager.persistAndFlush([user1]).catch((e) => e);
        expect(err.name).toEqual(core_1.CheckConstraintViolationException.name);
    });
});
//# sourceMappingURL=enum.spec.js.map