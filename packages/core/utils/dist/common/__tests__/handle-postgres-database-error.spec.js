"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle_postgres_database_error_1 = require("../handle-postgres-database-error");
const os_1 = require("os");
describe("handlePostgresDataError", function () {
    it("should throw a specific message on database does not exists", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: handle_postgres_database_error_1.DatabaseErrorCode.databaseDoesNotExist });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual(`The specified PostgreSQL database does not exist. Please create it and try again.${os_1.EOL}${error.message}`);
    });
    it("should throw a specific message on database connection failure", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: handle_postgres_database_error_1.DatabaseErrorCode.connectionFailure });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual(`Failed to establish a connection to PostgreSQL. Please ensure the following is true and try again:
      - You have a PostgreSQL database running
      - You have passed the correct credentials in medusa-config.js
      - You have formatted the database connection string correctly. See below:
      "postgres://[username]:[password]@[host]:[port]/[db_name]" - If there is no password, you can omit it from the connection string
      ${os_1.EOL}
      ${error.message}`);
    });
    it("should throw a specific message on database wrong credentials", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: handle_postgres_database_error_1.DatabaseErrorCode.wrongCredentials });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual(`The specified credentials does not exists for the specified PostgreSQL database.${os_1.EOL}${error.message}`);
    });
    it("should throw a specific message on database not found", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: handle_postgres_database_error_1.DatabaseErrorCode.notFound });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual(`The specified connection string for your PostgreSQL database might have illegal characters. Please check that it only contains allowed characters [a-zA-Z0-9]${os_1.EOL}${error.message}`);
    });
    it("should throw a specific message on database migration missing", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: handle_postgres_database_error_1.DatabaseErrorCode.migrationMissing });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual(`Migrations missing. Please run 'medusa migrations run' and try again.`);
    });
    it("should re throw unhandled error code", function () {
        const error = new Error("database does not exist");
        Object.assign(error, { code: "test" });
        let outputError;
        try {
            (0, handle_postgres_database_error_1.handlePostgresDatabaseError)(error);
        }
        catch (e) {
            outputError = e;
        }
        expect(outputError.message).toEqual("database does not exist");
    });
});
//# sourceMappingURL=handle-postgres-database-error.spec.js.map