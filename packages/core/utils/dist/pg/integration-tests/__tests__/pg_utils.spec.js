"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgGodCredentials = void 0;
const pg_god_1 = require("pg-god");
const index_1 = require("../../index");
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_USERNAME = process.env.DB_USERNAME ?? "";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "";
exports.pgGodCredentials = {
    user: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
};
describe("Pg | createClient", () => {
    test("create client connection from connection options", async () => {
        const client = (0, index_1.createClient)(exports.pgGodCredentials);
        await client.connect();
        await client.end();
    });
    test("create client connection from connectionString without db name", async () => {
        const client = (0, index_1.createClient)(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`);
        await client.connect();
        await client.end();
    });
    test("create client connection from connectionString with db name", async () => {
        const client = (0, index_1.createClient)(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/foo`);
        await expect(() => client.connect()).rejects.toMatchInlineSnapshot(`[error: database "foo" does not exist]`);
    });
});
describe("Pg | parseConnectionString", () => {
    test("parse connection string without db name", async () => {
        const options = (0, index_1.parseConnectionString)(`postgres://${DB_USERNAME}:@${DB_HOST}`);
        expect(options).toEqual({
            user: DB_USERNAME,
            password: "",
            host: DB_HOST,
            port: "",
            database: null,
        });
    });
    test("parse connection string with db name", async () => {
        const options = (0, index_1.parseConnectionString)(`postgres://${DB_USERNAME}:@${DB_HOST}/foo`);
        expect(options).toEqual({
            user: DB_USERNAME,
            password: "",
            host: DB_HOST,
            port: "",
            database: "foo",
        });
    });
});
describe("Pg | dbExists", () => {
    beforeEach(async () => {
        await (0, pg_god_1.dropDatabase)({ databaseName: "foo" }, exports.pgGodCredentials);
    });
    afterAll(async () => {
        await (0, pg_god_1.dropDatabase)({ databaseName: "foo" }, exports.pgGodCredentials);
    });
    test("return false when db does not exist", async () => {
        const options = (0, index_1.parseConnectionString)(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/foo`);
        const client = (0, index_1.createClient)({
            host: options.host,
            port: options.port ? Number(options.port) : undefined,
            user: options.user,
            password: options.password,
        });
        await client.connect();
        const exists = await (0, index_1.dbExists)(client, options.database);
        await client.end();
        expect(exists).toBe(false);
    });
    test("return true when db exist", async () => {
        const options = (0, index_1.parseConnectionString)(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/foo`);
        const client = (0, index_1.createClient)({
            host: options.host,
            port: options.port ? Number(options.port) : undefined,
            user: options.user,
            password: options.password,
        });
        await client.connect();
        await (0, index_1.createDb)(client, options.database);
        const exists = await (0, index_1.dbExists)(client, options.database);
        await client.end();
        expect(exists).toBe(true);
    });
});
//# sourceMappingURL=pg_utils.spec.js.map