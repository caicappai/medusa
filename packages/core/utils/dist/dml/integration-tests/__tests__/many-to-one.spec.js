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
exports.fileSystem = new common_1.FileSystem((0, path_1.join)(__dirname, "../../integration-tests-migrations-many-to-one"));
describe("manyToOne - belongTo", () => {
    const dbName = "EntityBuilder-ManyToOne";
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
            user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "teams" }),
        });
        const user = entity_builder_1.model
            .define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            teams: entity_builder_1.model.hasMany(() => team, { mappedBy: "user" }),
        })
            .cascades({
            delete: ["teams"],
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
        });
        const user2 = manager.create(User, {
            username: "User 2",
        });
        await manager.persistAndFlush([user1, user2]);
        manager = orm.em.fork();
        const team1 = manager.create(Team, {
            name: "Team 1",
            user_id: user1.id,
        });
        const team2 = manager.create(Team, {
            name: "Team 2",
            user_id: user2.id,
        });
        await manager.persistAndFlush([team1, team2]);
        manager = orm.em.fork();
        const team = await manager.findOne(Team, {
            id: team1.id,
        }, {
            populate: ["user"],
        });
        expect(await (0, dal_1.mikroOrmSerializer)(team)).toEqual({
            id: team1.id,
            name: "Team 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            user_id: user1.id,
            user: {
                id: user1.id,
                username: "User 1",
                created_at: expect.any(Date),
                updated_at: expect.any(Date),
                deleted_at: null,
            },
        });
        const user = await manager.findOne(User, {
            id: user1.id,
        }, {
            populate: ["teams"],
        });
        expect(await (0, dal_1.mikroOrmSerializer)(user)).toEqual({
            id: user1.id,
            username: "User 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            teams: [
                {
                    id: team1.id,
                    name: "Team 1",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                    user_id: user1.id,
                },
            ],
        });
    });
    it(`should handle soft delete cascade`, async () => {
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
        const team2 = manager.create(Team, {
            name: "Team 2",
            user_id: user1.id,
        });
        await manager.persistAndFlush([team1, team2]);
        manager = orm.em.fork();
        let teams = await manager.find(Team, {}, {
            populate: ["user"],
        });
        const serializedTeams = await (0, dal_1.mikroOrmSerializer)(teams);
        expect(serializedTeams).toHaveLength(2);
        expect(serializedTeams).toEqual(expect.arrayContaining([
            {
                id: team1.id,
                name: "Team 1",
                created_at: expect.any(Date),
                updated_at: expect.any(Date),
                deleted_at: null,
                user_id: user1.id,
                user: {
                    id: user1.id,
                    username: "User 1",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                },
            },
            {
                id: team2.id,
                name: "Team 2",
                created_at: expect.any(Date),
                updated_at: expect.any(Date),
                deleted_at: null,
                user_id: user1.id,
                user: {
                    id: user1.id,
                    username: "User 1",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                },
            },
        ]));
        manager = orm.em.fork();
        const userToDelete = await manager.findOne(User, {
            id: user1.id,
        });
        await (0, dal_1.mikroOrmUpdateDeletedAtRecursively)(manager, [userToDelete], new Date());
        teams = await manager.find(Team, {}, {
            populate: ["user"],
            filters: {
                [dal_1.SoftDeletableFilterKey]: {
                    withDeleted: true,
                },
            },
        });
        expect(teams).toHaveLength(2);
        expect(teams).toEqual(expect.arrayContaining([
            expect.objectContaining({
                deleted_at: expect.any(Date),
                user: expect.objectContaining({
                    deleted_at: expect.any(Date),
                }),
            }),
            expect.objectContaining({
                deleted_at: expect.any(Date),
                user: expect.objectContaining({
                    deleted_at: expect.any(Date),
                }),
            }),
        ]));
    });
});
//# sourceMappingURL=many-to-one.spec.js.map