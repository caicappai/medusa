"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const promises_1 = require("timers/promises");
const core_1 = require("@mikro-orm/core");
const index_1 = require("../../index");
const common_1 = require("../../../common");
const dml_1 = require("../../../dml");
const modules_sdk_1 = require("../../../modules-sdk");
jest.setTimeout(30000);
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_USERNAME = process.env.DB_USERNAME ?? "";
const DB_PASSWORD = process.env.DB_PASSWORD ?? " ";
const dbName = "my-test-service-generate";
const moduleName = "myTestServiceGenerate";
const fs = new common_1.FileSystem((0, path_1.join)(__dirname, "./migrations-generate"));
const pgGodCredentials = {
    user: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
};
describe("Generate migrations", () => {
    beforeEach(async () => {
        await fs.cleanup();
    });
    afterEach(async () => {
        await fs.cleanup();
        core_1.MetadataStorage.clear();
        dml_1.mikroORMEntityBuilder.clear();
    });
    test("generate migrations for a single entity", async () => {
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
            },
            ...pgGodCredentials,
        });
        const migrations = new index_1.Migrations(config);
        const results = await migrations.generate();
        expect(await fs.exists(results.fileName));
        expect(await fs.contents(results.fileName)).toMatch(/create table if not exists "user"/);
    });
    test("generate migrations for multiple entities", async () => {
        const User = dml_1.model
            .define("User", {
            id: dml_1.model.id().primaryKey(),
            email: dml_1.model.text().unique(),
            fullName: dml_1.model.text().nullable(),
            cars: dml_1.model.hasMany(() => Car),
        })
            .cascades({
            delete: ["cars"],
        });
        const Car = dml_1.model.define("Car", {
            id: dml_1.model.id().primaryKey(),
            name: dml_1.model.text(),
            user: dml_1.model.belongsTo(() => User, { mappedBy: "cars" }),
        });
        const config = (0, modules_sdk_1.defineMikroOrmCliConfig)(moduleName, {
            entities: [User, Car],
            dbName: dbName,
            migrations: {
                path: fs.basePath,
            },
            ...pgGodCredentials,
        });
        const migrations = new index_1.Migrations(config);
        const results = await migrations.generate();
        expect(await fs.exists(results.fileName));
        expect(await fs.contents(results.fileName)).toMatch(/create table if not exists "user"/);
        expect(await fs.contents(results.fileName)).toMatch(/create table if not exists "car"/);
    });
    test("generate new file when entities are added", async () => {
        function run(entities) {
            const config = (0, modules_sdk_1.defineMikroOrmCliConfig)(moduleName, {
                entities,
                dbName: dbName,
                migrations: {
                    path: fs.basePath,
                },
                ...pgGodCredentials,
            });
            const migrations = new index_1.Migrations(config);
            return migrations.generate();
        }
        const User = dml_1.model.define("User", {
            id: dml_1.model.id().primaryKey(),
            email: dml_1.model.text().unique(),
            fullName: dml_1.model.text().nullable(),
        });
        const run1 = await run([User]);
        expect(await fs.exists(run1.fileName));
        const Car = dml_1.model.define("Car", {
            id: dml_1.model.id().primaryKey(),
            name: dml_1.model.text(),
        });
        await (0, promises_1.setTimeout)(1000);
        const run2 = await run([User, Car]);
        expect(await fs.exists(run2.fileName));
        expect(run1.fileName).not.toEqual(run2.fileName);
    });
});
//# sourceMappingURL=migrations-generate.spec.js.map