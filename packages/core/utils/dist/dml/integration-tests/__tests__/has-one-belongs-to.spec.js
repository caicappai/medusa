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
exports.fileSystem = new common_1.FileSystem((0, path_1.join)(__dirname, "../../integration-tests-migrations-has-one-belongs-to"));
describe("hasOne - belongTo", () => {
    const dbName = "EntityBuilder-HasOneBelongsTo";
    let orm;
    let Team, User;
    afterAll(async () => {
        await exports.fileSystem.cleanup();
    });
    beforeEach(async () => {
        core_1.MetadataStorage.clear();
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "team" }).nullable(),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            team: entity_builder_1.model.hasOne(() => team, { mappedBy: "user" }).nullable(),
        });
        [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team]);
        await (0, pg_god_1.createDatabase)({ databaseName: dbName }, utils_1.pgGodCredentials);
        orm = await core_1.MikroORM.init({
            entities: [Team, User],
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
    it(`should handle the relation properly`, async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
            team: {
                name: "Team 1",
            },
        });
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        }, {
            populate: ["team"],
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            team: {
                id: expect.any(String),
                name: "Team 1",
                created_at: expect.any(Date),
                updated_at: expect.any(Date),
                deleted_at: null,
                user_id: user1.id,
            },
        });
    });
    it(`should handle the relation properly with just the relation id`, async () => {
        let manager = orm.em.fork();
        const user1 = manager.create(User, {
            username: "User 1",
        });
        await manager.persistAndFlush([user1]);
        manager = orm.em.fork();
        const team1 = manager.create(Team, {
            name: "Team 1",
            user_id: user1.id,
        });
        await manager.persistAndFlush([team1]);
        manager = orm.em.fork();
        const user = await manager.findOne(User, {
            id: user1.id,
        }, {
            populate: ["team"],
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            team: {
                id: expect.any(String),
                name: "Team 1",
                created_at: expect.any(Date),
                updated_at: expect.any(Date),
                deleted_at: null,
                user_id: user1.id,
            },
        });
    });
});
//# sourceMappingURL=has-one-belongs-to.spec.js.map