"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSystem = void 0;
const path_1 = require("path");
const core_1 = require("@mikro-orm/core");
const entity_builder_1 = require("../../entity-builder");
const create_mikro_orm_entity_1 = require("../../helpers/create-mikro-orm-entity");
const pg_god_1 = require("pg-god");
const dal_1 = require("../../../dal");
const utils_1 = require("../utils");
const common_1 = require("../../../common");
jest.setTimeout(30000);
exports.fileSystem = new common_1.FileSystem((0, path_1.join)(__dirname, "../../integration-tests-migrations-many-to-many"));
describe("manyToMany - manyToMany", () => {
    const dbName = "EntityBuilder-ManyToMany";
    let orm;
    let Team, User, Squad;
    afterAll(async () => {
        await exports.fileSystem.cleanup();
    });
    beforeEach(async () => {
        core_1.MetadataStorage.clear();
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.manyToMany(() => user, {
                pivotEntity: () => squad,
                mappedBy: "squads",
            }),
        });
        const squad = entity_builder_1.model.define("teamUsers", {
            id: entity_builder_1.model.id().primaryKey(),
            user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "squads" }),
            squad: entity_builder_1.model.belongsTo(() => team, { mappedBy: "users" }),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            squads: entity_builder_1.model.manyToMany(() => team, {
                pivotEntity: () => squad,
                mappedBy: "users",
            }),
        });
        [User, Squad, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, squad, team]);
        await (0, pg_god_1.createDatabase)({ databaseName: dbName }, utils_1.pgGodCredentials);
        orm = await core_1.MikroORM.init({
            entities: [Team, User, Squad],
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
        });
        const team2 = manager.create(Team, {
            name: "Team 2",
        });
        await manager.persistAndFlush([team1, team2]);
        manager = orm.em.fork();
        const squad1 = manager.create(Squad, {
            user_id: user1.id,
            squad_id: team1.id,
        });
        const squad2 = manager.create(Squad, {
            user_id: user2.id,
            squad_id: team1.id,
        });
        await manager.persistAndFlush([squad1, squad2]);
        manager = orm.em.fork();
        const team = await manager.findOne(Team, {
            id: team1.id,
        }, {
            populate: ["users"],
        });
        const serializedSquad = await (0, dal_1.mikroOrmSerializer)(team);
        expect(serializedSquad.users).toHaveLength(2);
        expect(serializedSquad).toEqual({
            id: team1.id,
            name: "Team 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            users: expect.arrayContaining([
                {
                    id: user1.id,
                    username: "User 1",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                },
                {
                    id: user2.id,
                    username: "User 2",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                },
            ]),
        });
        const user = await manager.findOne(User, {
            id: user1.id,
        }, {
            populate: ["squads"],
        });
        const serializedUser = await (0, dal_1.mikroOrmSerializer)(user);
        expect(serializedUser.squads).toHaveLength(1);
        expect(serializedUser).toEqual({
            id: user1.id,
            username: "User 1",
            created_at: expect.any(Date),
            updated_at: expect.any(Date),
            deleted_at: null,
            squads: expect.arrayContaining([
                {
                    id: team1.id,
                    name: "Team 1",
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    deleted_at: null,
                },
            ]),
        });
    });
    it(`should not fail to load the dml's if both side of the relation are missing the mappedBy options`, () => {
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.manyToMany(() => user, {
                pivot_table: "team_users",
            }),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            squads: entity_builder_1.model.manyToMany(() => team),
        });
        [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team]);
        const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
        expect(teamMetaData.properties.users.inversedBy).toBe("squads");
        expect(teamMetaData.properties.users.owner).toBe(true);
        const userMetaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
        expect(userMetaData.properties.squads.inversedBy).not.toBeDefined();
        expect(userMetaData.properties.squads.mappedBy).toBe("users");
        expect(userMetaData.properties.squads.owner).toBe(false);
    });
    it(`should load the dml's correclty when both side of the relation are specifying the mappedBy options without pivot table`, () => {
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.manyToMany(() => user, {
                mappedBy: "squads",
            }),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            squads: entity_builder_1.model.manyToMany(() => team, {
                mappedBy: "users",
            }),
        });
        let [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team]);
        const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
        expect(teamMetaData.properties.users.inversedBy).toBe("squads");
        expect(teamMetaData.properties.users.owner).toBe(true);
        expect(teamMetaData.properties.users.pivotTable).toBe("team_users");
        const userMetaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
        expect(userMetaData.properties.squads.inversedBy).not.toBeDefined();
        expect(userMetaData.properties.squads.mappedBy).toBe("users");
        expect(userMetaData.properties.squads.owner).toBe(false);
        expect(userMetaData.properties.squads.pivotTable).toBe("team_users");
    });
    it(`should fail to load the dml's if both side of the relation are missing the mappedBy options and multiple relations points to the same entity`, () => {
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.manyToMany(() => user, {
                pivot_table: "team_users",
            }),
            users2: entity_builder_1.model.manyToMany(() => user, {
                pivot_table: "team_users2",
            }),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
            squads: entity_builder_1.model.manyToMany(() => team),
            squads2: entity_builder_1.model.manyToMany(() => team),
        });
        let error;
        try {
            ;
            [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team]);
        }
        catch (e) {
            error = e;
        }
        expect(error).toBeDefined();
        expect(error?.message).toEqual('Invalid relationship reference for "User.squads". Make sure to set the mappedBy property on one side or the other or both.');
    });
    it(`should fail to load the dml's if the relation is defined only on one side`, () => {
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
        const team = entity_builder_1.model.define("team", {
            id: entity_builder_1.model.id().primaryKey(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.manyToMany(() => user),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id().primaryKey(),
            username: entity_builder_1.model.text(),
        });
        let error;
        try {
            ;
            [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team]);
        }
        catch (e) {
            error = e;
        }
        expect(error).toBeTruthy();
        expect(error.message).toEqual('Invalid relationship reference for "Team.users". "mappedBy" should be defined on one side or the other.');
    });
});
//# sourceMappingURL=many-to-many.spec.js.map