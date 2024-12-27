"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const postgresql_1 = require("@mikro-orm/postgresql");
const core_1 = require("@mikro-orm/core");
const pg_god_1 = require("pg-god");
const migrations_1 = require("@mikro-orm/migrations");
const dml_1 = require("../../../dml");
const common_1 = require("../../../common");
const index_1 = require("../../index");
const modules_sdk_1 = require("../../../modules-sdk");
const migrationFileNameGenerator = (_, name) => {
    return `Migration${new Date().getTime()}${name ? `_${name}` : ""}`;
};
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_USERNAME = process.env.DB_USERNAME ?? "";
const DB_PASSWORD = process.env.DB_PASSWORD ?? " ";
process.env.DB_PASSWORD = DB_PASSWORD;
const dbName = "my-test-service-run";
const moduleName = "myTestServiceRun";
const fs = new common_1.FileSystem((0, path_1.join)(__dirname, "./migrations-run"));
const pgGodCredentials = {
    user: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
};
// TODO: Reenable once flakiness is taken care of
describe.skip("Run migrations", () => {
    beforeEach(async () => {
        await (0, pg_god_1.dropDatabase)({ databaseName: dbName, errorIfNonExist: false }, pgGodCredentials);
        await fs.cleanup();
        await (0, pg_god_1.createDatabase)({ databaseName: dbName }, pgGodCredentials);
    });
    afterEach(async () => {
        await (0, pg_god_1.dropDatabase)({ databaseName: dbName, errorIfNonExist: false }, pgGodCredentials);
        await fs.cleanup();
        core_1.MetadataStorage.clear();
    }, 300 * 1000);
    test("run migrations after generating them", async () => {
        const User = dml_1.model.define("User", {
            id: dml_1.model.id().primaryKey(),
            email: dml_1.model.text().unique(),
            fullName: dml_1.model.text().nullable(),
        });
        const config = (0, modules_sdk_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [User],
            dbName: dbName,
            migrations: {
                path: fs.basePath,
                fileName: migrationFileNameGenerator,
            },
            ...pgGodCredentials,
        });
        const migrations = new index_1.Migrations(config);
        await migrations.generate();
        const results = await migrations.run();
        const orm = await postgresql_1.MikroORM.init(config);
        const usersTableExists = await orm.em["getKnex"]().schema.hasTable("user");
        await orm.close();
        expect(results).toHaveLength(1);
        expect(results).toEqual([
            {
                name: expect.stringMatching(/Migration\d+/),
                path: expect.stringContaining(__dirname),
            },
        ]);
        expect(usersTableExists).toEqual(true);
    });
    test("emit events when running migrations", async () => {
        let events = [];
        const User = dml_1.model.define("User", {
            id: dml_1.model.id().primaryKey(),
            email: dml_1.model.text().unique(),
            fullName: dml_1.model.text().nullable(),
        });
        const config = (0, modules_sdk_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [User],
            dbName: dbName,
            migrations: {
                path: fs.basePath,
                fileName: migrationFileNameGenerator,
            },
            ...pgGodCredentials,
        });
        const migrations = new index_1.Migrations(config);
        await migrations.generate();
        migrations.on("migrating", (event) => {
            events.push({ event: "migrating", payload: event });
        });
        migrations.on("migrated", (event) => {
            events.push({ event: "migrated", payload: event });
        });
        await migrations.run();
        expect(events).toHaveLength(2);
        expect(events[0].event).toEqual("migrating");
        expect(events[0].payload).toEqual({
            name: expect.stringMatching(/Migration\d+/),
            path: expect.stringContaining(__dirname),
            context: {},
        });
        expect(events[1].event).toEqual("migrated");
        expect(events[1].payload).toEqual({
            name: expect.stringMatching(/Migration\d+/),
            path: expect.stringContaining(__dirname),
            context: {},
        });
    });
    test("throw error when migration fails during run", async () => {
        /**
         * Custom strategy to output invalid SQL statement inside the
         * migration file
         */
        class CustomTSMigrationGenerator extends migrations_1.TSMigrationGenerator {
            createStatement(sql, padLeft) {
                let output = super.createStatement(sql, padLeft);
                return output.replace('"user"', '"foo";');
            }
        }
        const User = dml_1.model.define("User", {
            id: dml_1.model.id().primaryKey(),
            email: dml_1.model.text().unique(),
            fullName: dml_1.model.text().nullable(),
        });
        const config = (0, modules_sdk_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [User],
            dbName: dbName,
            migrations: {
                path: fs.basePath,
                generator: CustomTSMigrationGenerator,
                fileName: migrationFileNameGenerator,
            },
            ...pgGodCredentials,
        });
        const migrations = new index_1.Migrations(config);
        await migrations.generate();
        expect(migrations.run()).rejects.toThrow(/.*Migration.*/);
        const orm = await postgresql_1.MikroORM.init(config);
        const usersTableExists = await orm.em["getKnex"]().schema.hasTable("user");
        await orm.close();
        expect(usersTableExists).toEqual(false);
    });
});
//# sourceMappingURL=migrations-run.spec.js.map