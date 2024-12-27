"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const expect_type_1 = require("expect-type");
const entity_1 = require("../entity");
const entity_builder_1 = require("../entity-builder");
const errors_1 = require("../errors");
const create_mikro_orm_entity_1 = require("../helpers/create-mikro-orm-entity");
describe("Entity builder", () => {
    beforeEach(() => {
        core_1.MetadataStorage.clear();
        create_mikro_orm_entity_1.mikroORMEntityBuilder.clear();
    });
    const defaultColumnMetadata = {
        created_at: {
            columnType: "timestamptz",
            defaultRaw: "now()",
            getter: false,
            name: "created_at",
            fieldName: "created_at",
            nullable: false,
            onCreate: expect.any(Function),
            reference: "scalar",
            setter: false,
            type: "date",
        },
        deleted_at: {
            columnType: "timestamptz",
            getter: false,
            name: "deleted_at",
            fieldName: "deleted_at",
            nullable: true,
            reference: "scalar",
            setter: false,
            type: "date",
        },
        updated_at: {
            columnType: "timestamptz",
            defaultRaw: "now()",
            getter: false,
            name: "updated_at",
            fieldName: "updated_at",
            nullable: false,
            onCreate: expect.any(Function),
            onUpdate: expect.any(Function),
            reference: "scalar",
            setter: false,
            type: "date",
        },
    };
    describe("Entity builder | properties", () => {
        test("should identify a DML entity correctly", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
            });
            expect(entity_1.DmlEntity.isDmlEntity(user)).toBe(true);
            const nonDmlEntity = new Object();
            expect(entity_1.DmlEntity.isDmlEntity(nonDmlEntity)).toBe(false);
        });
        test("define an entity", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber(),
                phones: entity_builder_1.model.array(),
            });
            expect(user.name).toEqual("User");
            expect(user.parse().tableName).toEqual("user");
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                spend_limit: {
                    columnType: "numeric",
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                phones: {
                    getter: false,
                    name: "phones",
                    fieldName: "phones",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: core_1.ArrayType,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define an entity with a table name and a name", () => {
            const user = entity_builder_1.model.define({ name: "user", tableName: "user_table" }, {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber(),
            });
            expect(user.name).toEqual("User");
            expect(user.parse().tableName).toEqual("user_table");
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                spend_limit: {
                    columnType: "numeric",
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define an entity with a table name only", () => {
            const user = entity_builder_1.model.define({ tableName: "user_role" }, {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber(),
            });
            expect(user.name).toEqual("UserRole");
            expect(user.parse().tableName).toEqual("user_role");
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("UserRole");
            expect(metaData.path).toEqual("UserRole");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                spend_limit: {
                    columnType: "numeric",
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define a property with default value", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text().default("foo"),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber().default(500.4),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    default: "foo",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                spend_limit: {
                    columnType: "numeric",
                    default: 500.4,
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("should throw on duplicate id definition", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.id().primaryKey(),
                uuid: entity_builder_1.model.id(),
                name: entity_builder_1.model.text(),
            });
            let err;
            try {
                (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            }
            catch (e) {
                err = e;
            }
            expect(err).toBeInstanceOf(errors_1.DuplicateIdPropertyError);
            expect(err.message).toBe("The model User can only have one usage of the id() property");
        });
        test("should mark a property as searchable", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text().searchable(),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber().default(500.4),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                    searchable: true,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                spend_limit: {
                    columnType: "numeric",
                    default: 500.4,
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("mark property nullable", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text().nullable(),
                email: entity_builder_1.model.text(),
                spend_limit: entity_builder_1.model.bigNumber().nullable(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            const userInstance = new User();
            expect(userInstance.username).toEqual(undefined);
            expect(userInstance.spend_limit).toEqual(undefined);
            expect(userInstance.raw_spend_limit).toEqual(undefined);
            userInstance.username = "john";
            expect(userInstance.username).toEqual("john");
            userInstance.spend_limit = 150.5;
            expect(userInstance.spend_limit).toEqual(150.5);
            expect(userInstance.raw_spend_limit).toEqual({
                precision: 20,
                value: "150.5",
            });
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                raw_spend_limit: {
                    columnType: "jsonb",
                    getter: false,
                    name: "raw_spend_limit",
                    fieldName: "raw_spend_limit",
                    nullable: true,
                    reference: "scalar",
                    setter: false,
                    type: "any",
                },
                spend_limit: {
                    columnType: "numeric",
                    getter: true,
                    name: "spend_limit",
                    fieldName: "spend_limit",
                    nullable: true,
                    reference: "scalar",
                    setter: true,
                    trackChanges: false,
                    type: "any",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define an entity with enum property", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                role: entity_builder_1.model.enum(["moderator", "admin", "guest"]),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                role: {
                    reference: "scalar",
                    enum: true,
                    items: expect.any(Function),
                    nullable: false,
                    name: "role",
                    fieldName: "role",
                    type: "string",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            expect(metaData.properties["role"].items()).toEqual([
                "moderator",
                "admin",
                "guest",
            ]);
        });
        test("define enum property with default value", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                role: entity_builder_1.model.enum(["moderator", "admin", "guest"]).default("guest"),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toEqualTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                role: {
                    reference: "scalar",
                    enum: true,
                    default: "guest",
                    items: expect.any(Function),
                    nullable: false,
                    name: "role",
                    fieldName: "role",
                    type: "string",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            expect(metaData.properties["role"].items()).toEqual([
                "moderator",
                "admin",
                "guest",
            ]);
        });
        test("mark enum property nullable", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                role: entity_builder_1.model.enum(["moderator", "admin", "guest"]).nullable(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            const userInstance = new User();
            expect(userInstance.role).toEqual(undefined);
            userInstance.role = "admin";
            expect(userInstance.role).toEqual("admin");
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                role: {
                    reference: "scalar",
                    enum: true,
                    items: expect.any(Function),
                    nullable: true,
                    name: "role",
                    fieldName: "role",
                    type: "string",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            expect(metaData.properties["role"].items()).toEqual([
                "moderator",
                "admin",
                "guest",
            ]);
        });
        test("disallow defining created_at and updated_at timestamps", () => {
            expect(() => entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                created_at: entity_builder_1.model.dateTime(),
                updated_at: entity_builder_1.model.dateTime(),
            })).toThrow('Cannot define field(s) "created_at,updated_at" as they are implicitly defined on every model');
        });
        test("disallow defining deleted_at timestamp", () => {
            expect(() => entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
                deleted_at: entity_builder_1.model.dateTime(),
            })).toThrow('Cannot define field(s) "deleted_at" as they are implicitly defined on every model');
        });
        test("define pg schema name in the entity name", () => {
            const user = entity_builder_1.model.define("public.user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.tableName).toEqual("public.user");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define JSON property with default value", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                email: entity_builder_1.model.text(),
                phones: entity_builder_1.model.json().default({ number: "22222222" }),
            });
            expect(user.name).toEqual("User");
            expect(user.parse().tableName).toEqual("user");
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                phones: {
                    getter: false,
                    name: "phones",
                    fieldName: "phones",
                    nullable: false,
                    reference: "scalar",
                    default: JSON.stringify({ number: "22222222" }),
                    setter: false,
                    columnType: "jsonb",
                    type: "any",
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define a float property", () => {
            const tax = entity_builder_1.model.define("tax", {
                id: entity_builder_1.model.number(),
                rate: entity_builder_1.model.float(),
            });
            expect(tax.name).toEqual("Tax");
            expect(tax.parse().tableName).toEqual("tax");
            const Tax = (0, create_mikro_orm_entity_1.toMikroORMEntity)(tax);
            (0, expect_type_1.expectTypeOf)(new Tax()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(Tax);
            expect(metaData.className).toEqual("Tax");
            expect(metaData.path).toEqual("Tax");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                rate: {
                    reference: "scalar",
                    type: "number",
                    columnType: "real",
                    name: "rate",
                    fieldName: "rate",
                    serializer: Number,
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | relationships", () => {
        test("should mark a relationship as searchable", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email).searchable(),
            });
            const email = entity_builder_1.model.define("email", {
                id: entity_builder_1.model.number(),
                email: entity_builder_1.model.text(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    cascade: undefined,
                    entity: "Email",
                    mappedBy: "user",
                    name: "emails",
                    orphanRemoval: true,
                    reference: "1:m",
                    searchable: true,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | id", () => {
        test("define an entity with id property", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.id(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.hooks).toEqual({
                beforeCreate: [
                    "generateId",
                    "deleted_at_setDefaultValueOnBeforeCreate",
                ],
                onInit: ["generateId"],
            });
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("mark id as primary", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.id().primaryKey(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            const userInstance = new User();
            userInstance["generateId"]();
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.hooks).toEqual({
                beforeCreate: [
                    "generateId",
                    "deleted_at_setDefaultValueOnBeforeCreate",
                ],
                onInit: ["generateId"],
            });
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    primary: true,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            expect(userInstance.id).toBeDefined();
        });
        test("define prefix for the id", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.id({ prefix: "us" }).primaryKey(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            const userInstance = new User();
            userInstance["generateId"]();
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.hooks).toEqual({
                beforeCreate: [
                    "generateId",
                    "deleted_at_setDefaultValueOnBeforeCreate",
                ],
                onInit: ["generateId"],
            });
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    primary: true,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            expect(userInstance.id.startsWith("us_")).toBeTruthy();
        });
    });
    describe("Entity builder | primaryKey", () => {
        test("should infer primaryKeys from a model", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.id().primaryKey(),
                email: entity_builder_1.model.text().primaryKey(),
                account_id: entity_builder_1.model.number(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.properties.id).toEqual({
                columnType: "text",
                name: "id",
                fieldName: "id",
                nullable: false,
                reference: "scalar",
                type: "string",
                primary: true,
            });
            expect(metaData.properties.email).toEqual({
                columnType: "text",
                name: "email",
                fieldName: "email",
                nullable: false,
                reference: "scalar",
                type: "string",
                primary: true,
            });
        });
    });
    describe("Entity builder | indexes", () => {
        test("define index on a field", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number().index(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text().unique(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.indexes).toEqual([
                {
                    name: "IDX_user_id",
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_id" ON "user" (id) WHERE deleted_at IS NULL',
                },
                {
                    name: "IDX_user_email_unique",
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_user_email_unique" ON "user" (email) WHERE deleted_at IS NULL',
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
            ]);
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define index when entity is using an explicit pg Schema", () => {
            const user = entity_builder_1.model.define("platform.user", {
                id: entity_builder_1.model.number().index(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.text().unique(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.tableName).toEqual("platform.user");
            expect(metaData.indexes).toEqual([
                {
                    name: "IDX_user_id",
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_id" ON "platform"."user" (id) WHERE deleted_at IS NULL',
                },
                {
                    name: "IDX_user_email_unique",
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_user_email_unique" ON "platform"."user" (email) WHERE deleted_at IS NULL',
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "platform"."user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
            ]);
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define index on a field using camelCase name", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number().index(),
                username: entity_builder_1.model.text(),
                myEmail: entity_builder_1.model.text().unique(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.indexes).toEqual([
                {
                    name: "IDX_user_id",
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_id" ON "user" (id) WHERE deleted_at IS NULL',
                },
                {
                    name: "IDX_user_myEmail_unique",
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_user_myEmail_unique" ON "user" (myEmail) WHERE deleted_at IS NULL',
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
            ]);
            expect(metaData.filters).toEqual({
                softDeletable: {
                    name: "softDeletable",
                    cond: expect.any(Function),
                    default: true,
                    args: false,
                },
            });
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                myEmail: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "myEmail",
                    fieldName: "myEmail",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | hasOne", () => {
        test("define hasOne relationship", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toEqualTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("mark hasOne relationship as nullable", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasOne(() => email).nullable(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:1",
                    name: "emails",
                    entity: "Email",
                    nullable: true,
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom mappedBy key to undefined to not get the auto generated value", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, { mappedBy: undefined }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    onDelete: undefined,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom mappedBy key for relationship", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, { mappedBy: "owner" }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "owner",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades for the entity", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            })
                .cascades({
                delete: ["email"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                    cascade: ["persist", "soft-remove"],
                    onDelete: "cascade",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades with belongsTo on the other end", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            })
                .cascades({
                delete: ["email"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                    onDelete: "cascade",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    entity: "User",
                    fieldName: "user_id",
                    mappedBy: "email",
                    name: "user",
                    nullable: false,
                    onDelete: "cascade",
                    owner: true,
                    reference: "1:1",
                    cascade: ["persist", "soft-remove"],
                },
                user_id: {
                    columnType: "text",
                    getter: false,
                    persist: false,
                    name: "user_id",
                    nullable: false,
                    formula: expect.any(Function),
                    reference: "scalar",
                    setter: false,
                    type: "string",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | hasOneWithFK", () => {
        test("define hasOne relationship with FK enabled", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, {
                    foreignKey: true,
                    mappedBy: undefined,
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toEqualTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    fieldName: "email_id",
                },
                email_id: {
                    columnType: "text",
                    type: "string",
                    reference: "scalar",
                    name: "email_id",
                    formula: expect.any(Function),
                    nullable: false,
                    persist: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("mark hasOne with FK enabled relationship as nullable", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model
                    .hasOne(() => email, {
                    foreignKey: true,
                    mappedBy: undefined,
                })
                    .nullable(),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User().emails_id).toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:1",
                    name: "emails",
                    entity: "Email",
                    nullable: true,
                    fieldName: "emails_id",
                },
                emails_id: {
                    columnType: "text",
                    type: "string",
                    reference: "scalar",
                    name: "emails_id",
                    formula: expect.any(Function),
                    nullable: true,
                    persist: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom mappedBy key for relationship", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, {
                    mappedBy: "owner",
                    foreignKey: true,
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User().email_id).toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "owner",
                    fieldName: "email_id",
                },
                email_id: {
                    columnType: "text",
                    type: "string",
                    reference: "scalar",
                    name: "email_id",
                    formula: expect.any(Function),
                    nullable: false,
                    persist: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades for the entity", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, {
                    foreignKey: true,
                }),
            })
                .cascades({
                delete: ["email"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User().email_id).toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    cascade: ["persist", "soft-remove"],
                    mappedBy: "user",
                    fieldName: "email_id",
                },
                email_id: {
                    columnType: "text",
                    type: "string",
                    reference: "scalar",
                    name: "email_id",
                    formula: expect.any(Function),
                    nullable: false,
                    persist: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades with belongsTo on the other end", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email, {
                    foreignKey: true,
                }),
            })
                .cascades({
                delete: ["email"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User().email_id).toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    cascade: ["persist", "soft-remove"],
                    mappedBy: "user",
                    fieldName: "email_id",
                },
                email_id: {
                    columnType: "text",
                    type: "string",
                    reference: "scalar",
                    formula: expect.any(Function),
                    name: "email_id",
                    nullable: false,
                    persist: false,
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    entity: "User",
                    mappedBy: "email",
                    name: "user",
                    nullable: false,
                    onDelete: "cascade",
                    owner: true,
                    reference: "1:1",
                    cascade: ["persist", "soft-remove"],
                    fieldName: "user_id",
                },
                user_id: {
                    columnType: "text",
                    getter: false,
                    name: "user_id",
                    nullable: false,
                    reference: "scalar",
                    formula: expect.any(Function),
                    setter: false,
                    type: "string",
                    persist: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | indexes", () => {
        test("should define indexes for an entity", () => {
            const group = entity_builder_1.model.define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.hasMany(() => user),
            });
            const user = entity_builder_1.model
                .define("user", {
                email: entity_builder_1.model.text(),
                account: entity_builder_1.model.text(),
                organization: entity_builder_1.model.text(),
                group: entity_builder_1.model.belongsTo(() => group, { mappedBy: "users" }),
            })
                .indexes([
                {
                    unique: true,
                    on: ["email", "account"],
                },
                { on: ["email", "account"] },
                {
                    on: ["organization", "account"],
                    where: "email IS NOT NULL",
                },
                {
                    name: "IDX_unique-name",
                    unique: true,
                    on: ["organization", "account", "group_id"],
                },
            ]);
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                account: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "account",
                    fieldName: "account",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                organization: {
                    columnType: "text",
                    getter: false,
                    name: "organization",
                    fieldName: "organization",
                    nullable: false,
                    reference: "scalar",
                    setter: false,
                    type: "string",
                },
                group: {
                    entity: "Group",
                    fieldName: "group_id",
                    name: "group",
                    nullable: false,
                    persist: false,
                    reference: "m:1",
                },
                group_id: {
                    columnType: "text",
                    entity: "Group",
                    fieldName: "group_id",
                    mapToPk: true,
                    name: "group_id",
                    nullable: false,
                    onDelete: undefined,
                    reference: "m:1",
                },
                ...defaultColumnMetadata,
            });
            expect(metaData.indexes).toEqual([
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_group_id" ON "user" (group_id) WHERE deleted_at IS NULL',
                    name: "IDX_user_group_id",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
                {
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_user_email_account_unique" ON "user" (email, account) WHERE deleted_at IS NULL',
                    name: "IDX_user_email_account_unique",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_email_account" ON "user" (email, account) WHERE deleted_at IS NULL',
                    name: "IDX_user_email_account",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_organization_account" ON "user" (organization, account) WHERE email IS NOT NULL AND deleted_at IS NULL',
                    name: "IDX_user_organization_account",
                },
                {
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_unique-name" ON "user" (organization, account, group_id) WHERE deleted_at IS NULL',
                    name: "IDX_unique-name",
                },
            ]);
        });
        test("should define indexes with a query builder", () => {
            const group = entity_builder_1.model.define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.hasMany(() => user),
            });
            const user = entity_builder_1.model
                .define("user", {
                email: entity_builder_1.model.text(),
                account: entity_builder_1.model.text(),
                organization: entity_builder_1.model.text(),
                is_owner: entity_builder_1.model.boolean(),
                group: entity_builder_1.model.belongsTo(() => group, { mappedBy: "users" }),
            })
                .indexes([
                {
                    on: ["organization", "account"],
                    where: { email: { $ne: null } },
                },
                {
                    name: "IDX-email-account-special",
                    on: ["organization", "account"],
                    where: {
                        email: { $ne: null },
                        account: null,
                    },
                },
                {
                    name: "IDX_unique-name",
                    unique: true,
                    on: ["organization", "account", "group_id"],
                },
                {
                    on: ["organization", "group_id"],
                    where: { is_owner: false },
                },
                {
                    on: ["account", "group_id"],
                    where: { is_owner: true },
                },
            ]);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator((0, create_mikro_orm_entity_1.toMikroORMEntity)(user));
            expect(metaData.indexes).toEqual([
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_group_id" ON "user" (group_id) WHERE deleted_at IS NULL',
                    name: "IDX_user_group_id",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_organization_account" ON "user" (organization, account) WHERE email IS NOT NULL AND deleted_at IS NULL',
                    name: "IDX_user_organization_account",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX-email-account-special" ON "user" (organization, account) WHERE email IS NOT NULL AND account IS NULL AND deleted_at IS NULL',
                    name: "IDX-email-account-special",
                },
                {
                    expression: 'CREATE UNIQUE INDEX IF NOT EXISTS "IDX_unique-name" ON "user" (organization, account, group_id) WHERE deleted_at IS NULL',
                    name: "IDX_unique-name",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_organization_group_id" ON "user" (organization, group_id) WHERE is_owner IS FALSE AND deleted_at IS NULL',
                    name: "IDX_user_organization_group_id",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_account_group_id" ON "user" (account, group_id) WHERE is_owner IS TRUE AND deleted_at IS NULL',
                    name: "IDX_user_account_group_id",
                },
            ]);
        });
        test("should throw an error if field is unknown for an index", () => {
            const group = entity_builder_1.model.define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.hasMany(() => user),
            });
            const user = entity_builder_1.model
                .define("user", {
                email: entity_builder_1.model.text(),
                account: entity_builder_1.model.text(),
                organization: entity_builder_1.model.text(),
                group: entity_builder_1.model.belongsTo(() => group, { mappedBy: "users" }),
            })
                .indexes([
                {
                    // @ts-expect-error
                    on: ["email", "account", "doesnotexist", "anotherdoesnotexist"],
                },
            ]);
            let err;
            try {
                (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            }
            catch (e) {
                err = e;
            }
            expect(err.message).toEqual(`Cannot apply indexes on fields (doesnotexist, anotherdoesnotexist) for model User`);
        });
        test("should define indexes for an entity", () => {
            const group = entity_builder_1.model.define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.hasMany(() => user),
            });
            const setting = entity_builder_1.model.define("setting", {
                name: entity_builder_1.model.text(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                email: entity_builder_1.model.text(),
                account: entity_builder_1.model.text(),
                organization: entity_builder_1.model.text(),
                group: entity_builder_1.model.belongsTo(() => group, { mappedBy: "users" }),
                setting: entity_builder_1.model.hasOne(() => setting),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.indexes).toEqual([
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_group_id" ON "user" (group_id) WHERE deleted_at IS NULL',
                    name: "IDX_user_group_id",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_user_deleted_at" ON "user" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_user_deleted_at",
                },
            ]);
            const Setting = (0, create_mikro_orm_entity_1.toMikroORMEntity)(setting);
            const settingMetadata = core_1.MetadataStorage.getMetadataFromDecorator(Setting);
            expect(settingMetadata.indexes).toEqual([
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_setting_user_id" ON "setting" (user_id) WHERE deleted_at IS NULL',
                    name: "IDX_setting_user_id",
                },
                {
                    expression: 'CREATE INDEX IF NOT EXISTS "IDX_setting_deleted_at" ON "setting" (deleted_at) WHERE deleted_at IS NULL',
                    name: "IDX_setting_deleted_at",
                },
            ]);
        });
    });
    describe("Entity builder | hasMany", () => {
        test("define hasMany relationship", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    orphanRemoval: true,
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom mappedBy property name for hasMany relationship", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email, {
                    mappedBy: "the_user",
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    mappedBy: "the_user",
                    orphanRemoval: true,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades for the entity", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email),
            })
                .cascades({
                delete: ["emails"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    orphanRemoval: true,
                    mappedBy: "user",
                    cascade: ["persist", "soft-remove"],
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define delete cascades with belongsTo on the other end", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "emails" }),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email),
            })
                .cascades({
                delete: ["emails"],
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    orphanRemoval: true,
                    mappedBy: "user",
                    cascade: ["persist", "soft-remove"],
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    entity: "User",
                    fieldName: "user_id",
                    name: "user",
                    nullable: false,
                    persist: false,
                    reference: "m:1",
                },
                user_id: {
                    columnType: "text",
                    entity: "User",
                    mapToPk: true,
                    fieldName: "user_id",
                    name: "user_id",
                    nullable: false,
                    onDelete: "cascade",
                    reference: "m:1",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | belongsTo", () => {
        test("define belongsTo relationship with hasOne", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            });
            const [User, Email] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, email]);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const userInstance = new User();
            (0, expect_type_1.expectTypeOf)().toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email().user_id).toEqualTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    fieldName: "user_id",
                    reference: "1:1",
                    entity: "User",
                    nullable: false,
                    mappedBy: "email",
                    onDelete: undefined,
                    owner: true,
                },
                user_id: {
                    reference: "scalar",
                    persist: false,
                    type: "string",
                    formula: expect.any(Function),
                    columnType: "text",
                    nullable: false,
                    name: "user_id",
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("mark belongsTo with hasOne as nullable", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user).nullable(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const userInstance = new User();
            (0, expect_type_1.expectTypeOf)().toEqualTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email().user_id).toEqualTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    fieldName: "user_id",
                    reference: "1:1",
                    entity: "User",
                    nullable: true,
                    onDelete: undefined,
                    mappedBy: "email",
                    owner: true,
                },
                user_id: {
                    reference: "scalar",
                    persist: false,
                    type: "string",
                    columnType: "text",
                    nullable: true,
                    formula: expect.any(Function),
                    name: "user_id",
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define belongsTo relationship with hasMany", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "emails" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    mappedBy: "user",
                    orphanRemoval: true,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    reference: "m:1",
                    entity: "User",
                    fieldName: "user_id",
                    persist: false,
                    nullable: false,
                },
                user_id: {
                    name: "user_id",
                    reference: "m:1",
                    entity: "User",
                    columnType: "text",
                    mapToPk: true,
                    fieldName: "user_id",
                    nullable: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define belongsTo with hasMany as nullable", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "emails" }).nullable(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                emails: entity_builder_1.model.hasMany(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                emails: {
                    reference: "1:m",
                    name: "emails",
                    entity: "Email",
                    mappedBy: "user",
                    orphanRemoval: true,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    reference: "m:1",
                    fieldName: "user_id",
                    entity: "User",
                    persist: false,
                    nullable: true,
                },
                user_id: {
                    name: "user_id",
                    reference: "m:1",
                    entity: "User",
                    columnType: "text",
                    mapToPk: true,
                    fieldName: "user_id",
                    nullable: true,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("throw error when other side relationship is invalid", () => {
            const email = entity_builder_1.model.define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.belongsTo(() => email),
            });
            expect(() => (0, create_mikro_orm_entity_1.toMikroORMEntity)(email)).toThrow('Invalid relationship reference for "email" on "User" entity. Make sure to define a hasOne or hasMany relationship');
        });
        test("throw error when cascading a parent from a child", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
            });
            const defineEmail = () => entity_builder_1.model
                .define("email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            })
                .cascades({
                // @ts-expect-error "User cannot be mentioned in cascades"
                delete: ["user"],
            });
            expect(defineEmail).toThrow('Cannot cascade delete "user" relationship(s) from "Email" entity. Child to parent cascades are not allowed');
        });
        test("define relationships when entity names has pg schema name", () => {
            const email = entity_builder_1.model.define("platform.email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model.define("platform.user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.tableName).toEqual("platform.user");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.tableName).toEqual("platform.email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    fieldName: "user_id",
                    reference: "1:1",
                    entity: "User",
                    nullable: false,
                    mappedBy: "email",
                    onDelete: undefined,
                    owner: true,
                },
                user_id: {
                    reference: "scalar",
                    type: "string",
                    persist: false,
                    columnType: "text",
                    formula: expect.any(Function),
                    nullable: false,
                    name: "user_id",
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define relationships between cross pg schemas entities", () => {
            const email = entity_builder_1.model.define("platform.email", {
                email: entity_builder_1.model.text(),
                isVerified: entity_builder_1.model.boolean(),
                user: entity_builder_1.model.belongsTo(() => user),
            });
            const user = entity_builder_1.model.define("public.user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                email: entity_builder_1.model.hasOne(() => email),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Email = (0, create_mikro_orm_entity_1.toMikroORMEntity)(email);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Email()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.tableName).toEqual("public.user");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                email: {
                    reference: "1:1",
                    name: "email",
                    entity: "Email",
                    mappedBy: "user",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const emailMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Email);
            expect(emailMetaData.className).toEqual("Email");
            expect(emailMetaData.path).toEqual("Email");
            expect(emailMetaData.tableName).toEqual("platform.email");
            expect(emailMetaData.properties).toEqual({
                email: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "email",
                    fieldName: "email",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                isVerified: {
                    reference: "scalar",
                    type: "boolean",
                    columnType: "boolean",
                    name: "isVerified",
                    fieldName: "isVerified",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    fieldName: "user_id",
                    reference: "1:1",
                    entity: "User",
                    nullable: false,
                    mappedBy: "email",
                    onDelete: undefined,
                    owner: true,
                },
                user_id: {
                    reference: "scalar",
                    persist: false,
                    type: "string",
                    columnType: "text",
                    nullable: false,
                    formula: expect.any(Function),
                    name: "user_id",
                    getter: false,
                    setter: false,
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define entity with relationship to itself via hasMany", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                parent: entity_builder_1.model.belongsTo(() => user, { mappedBy: "children" }),
                children: entity_builder_1.model.hasMany(() => user, { mappedBy: "parent" }),
            });
            const [User] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user]);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                parent: {
                    name: "parent",
                    fieldName: "parent_id",
                    reference: "m:1",
                    entity: "User",
                    persist: false,
                    nullable: false,
                },
                parent_id: {
                    name: "parent_id",
                    reference: "m:1",
                    entity: "User",
                    columnType: "text",
                    fieldName: "parent_id",
                    mapToPk: true,
                    nullable: false,
                    onDelete: undefined,
                },
                children: {
                    cascade: undefined,
                    entity: "User",
                    mappedBy: "parent",
                    name: "children",
                    orphanRemoval: true,
                    reference: "1:m",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define relationship with self via hasOne", () => {
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                parent: entity_builder_1.model.belongsTo(() => user, { mappedBy: "child" }),
                child: entity_builder_1.model.hasOne(() => user, { mappedBy: "parent" }),
            });
            const [User] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user]);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                parent: {
                    name: "parent",
                    fieldName: "parent_id",
                    mappedBy: "child",
                    reference: "1:1",
                    entity: "User",
                    nullable: false,
                    onDelete: undefined,
                    owner: true,
                },
                parent_id: {
                    name: "parent_id",
                    type: "string",
                    columnType: "text",
                    reference: "scalar",
                    formula: expect.any(Function),
                    persist: false,
                    getter: false,
                    setter: false,
                    nullable: false,
                },
                child: {
                    cascade: undefined,
                    entity: "User",
                    mappedBy: "parent",
                    name: "child",
                    reference: "1:1",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
    });
    describe("Entity builder | manyToMany", () => {
        test("define manyToMany relationship", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    mappedBy: "users",
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    inversedBy: "teams",
                    entity: "User",
                    owner: true,
                    pivotTable: "team_users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define mappedBy on one side", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    inversedBy: "teams",
                    pivotTable: "team_users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("should define onDelete cascade on pivot entity when applying detach cascade", () => {
            const teamUser = entity_builder_1.model.define("teamUser", {
                id: entity_builder_1.model.number(),
                user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "teams" }),
                team: entity_builder_1.model.belongsTo(() => team, { mappedBy: "users" }),
            });
            const user = entity_builder_1.model
                .define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    pivotEntity: () => teamUser,
                }),
            })
                .cascades({
                detach: ["teams"],
            });
            const team = entity_builder_1.model
                .define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user, {
                    pivotEntity: () => teamUser,
                }),
            })
                .cascades({
                detach: ["users"],
            });
            (0, expect_type_1.expectTypeOf)().toEqualTypeOf();
            const [, , TeamUserEntity] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team, teamUser]);
            const teamUserMetadata = core_1.MetadataStorage.getMetadataFromDecorator(TeamUserEntity);
            expect(teamUserMetadata.properties).toEqual(expect.objectContaining({
                user_id: {
                    reference: "scalar",
                    type: "User",
                    columnType: "text",
                    fieldName: "user_id",
                    nullable: false,
                    name: "user_id",
                    getter: false,
                    setter: false,
                },
                user: {
                    name: "user",
                    reference: "m:1",
                    entity: "User",
                    nullable: false,
                    persist: false,
                    onDelete: "cascade",
                },
                team_id: {
                    reference: "scalar",
                    type: "Team",
                    columnType: "text",
                    fieldName: "team_id",
                    nullable: false,
                    name: "team_id",
                    getter: false,
                    setter: false,
                },
                team: {
                    name: "team",
                    reference: "m:1",
                    entity: "Team",
                    nullable: false,
                    persist: false,
                    onDelete: "cascade",
                },
            }));
        });
        test("throw error when unable to locate relationship via mappedBy", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            expect(() => (0, create_mikro_orm_entity_1.toMikroORMEntity)(user)).toThrow('Missing property "users" on "Team" entity. Make sure to define it as a relationship');
        });
        test("throw error when mappedBy relationship is not a manyToMany", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.belongsTo(() => team, { mappedBy: "teams" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            expect(() => (0, create_mikro_orm_entity_1.toMikroORMEntity)(user)).toThrow('Invalid relationship reference for "users" on "Team" entity. Make sure to define a manyToMany relationship');
        });
        test("define mappedBy on both sides", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user, { mappedBy: "teams" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            const [User, Team] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team, {}]);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    pivotTable: "team_users",
                    inversedBy: "teams",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define mappedBy on both sides and reverse order of registering entities", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user, { mappedBy: "teams" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    pivotTable: "team_users",
                    inversedBy: "teams",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define multiple many to many relationships to the same entity", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                activeTeamsUsers: entity_builder_1.model.manyToMany(() => user, {
                    mappedBy: "activeTeams",
                }),
                users: entity_builder_1.model.manyToMany(() => user, { mappedBy: "teams" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                activeTeams: entity_builder_1.model.manyToMany(() => team, {
                    mappedBy: "activeTeamsUsers",
                }),
                teams: entity_builder_1.model.manyToMany(() => team, { mappedBy: "users" }),
            });
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "users",
                },
                activeTeams: {
                    reference: "m:n",
                    name: "activeTeams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "team_users",
                    mappedBy: "activeTeamsUsers",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    pivotTable: "team_users",
                    inversedBy: "teams",
                },
                activeTeamsUsers: {
                    reference: "m:n",
                    name: "activeTeamsUsers",
                    entity: "User",
                    owner: true,
                    pivotTable: "team_users",
                    inversedBy: "activeTeams",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define manyToMany relationship when entity names has pg schema name", () => {
            const team = entity_builder_1.model.define("platform.team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user),
            });
            const user = entity_builder_1.model.define("platform.user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    mappedBy: "users",
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.tableName).toEqual("platform.user");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotTable: "platform.team_users",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.tableName).toEqual("platform.team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    inversedBy: "teams",
                    pivotTable: "platform.team_users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("should compute the pivot table name correctly", () => {
            const team = entity_builder_1.model.define("teamSquad", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user),
            });
            const user = entity_builder_1.model.define("RandomUser", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    mappedBy: "users",
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("RandomUser");
            expect(metaData.path).toEqual("RandomUser");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "TeamSquad",
                    owner: true,
                    pivotTable: "random_user_team_squads",
                    inversedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("TeamSquad");
            expect(teamMetaData.path).toEqual("TeamSquad");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "RandomUser",
                    owner: false,
                    mappedBy: "teams",
                    pivotTable: "random_user_team_squads",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom pivot table name", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    pivotTable: "users_teams",
                    mappedBy: "users",
                }),
            });
            const User = (0, create_mikro_orm_entity_1.toMikroORMEntity)(user);
            const Team = (0, create_mikro_orm_entity_1.toMikroORMEntity)(team);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: true,
                    pivotTable: "users_teams",
                    inversedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    owner: false,
                    entity: "User",
                    mappedBy: "teams",
                    pivotTable: "users_teams",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("define custom pivot entity", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user, {
                    pivotEntity: () => squad,
                }),
            });
            const squad = entity_builder_1.model.define("teamUsers", {
                id: entity_builder_1.model.number(),
                user: entity_builder_1.model.belongsTo(() => user, { mappedBy: "teams" }),
                team: entity_builder_1.model.belongsTo(() => team, { mappedBy: "users" }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    pivotEntity: () => squad,
                    mappedBy: "users",
                }),
            });
            const [User, Team, Squad] = (0, create_mikro_orm_entity_1.toMikroOrmEntities)([user, team, squad]);
            (0, expect_type_1.expectTypeOf)(new User()).toMatchTypeOf();
            (0, expect_type_1.expectTypeOf)(new Team()).toMatchTypeOf();
            const squadMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Squad);
            expect(squadMetaData.className).toEqual("TeamUsers");
            expect(squadMetaData.path).toEqual("TeamUsers");
            expect(squadMetaData.tableName).toEqual("team_users");
            expect(squadMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    columnType: "integer",
                    type: "number",
                    nullable: false,
                    name: "id",
                    fieldName: "id",
                    getter: false,
                    setter: false,
                },
                user_id: {
                    name: "user_id",
                    reference: "scalar",
                    columnType: "text",
                    fieldName: "user_id",
                    getter: false,
                    setter: false,
                    nullable: false,
                    type: "User",
                },
                user: {
                    reference: "m:1",
                    entity: "User",
                    persist: false,
                    nullable: false,
                    name: "user",
                },
                team_id: {
                    name: "team_id",
                    reference: "scalar",
                    columnType: "text",
                    fieldName: "team_id",
                    nullable: false,
                    getter: false,
                    setter: false,
                    type: "Team",
                },
                team: {
                    reference: "m:1",
                    entity: "Team",
                    persist: false,
                    nullable: false,
                    name: "team",
                },
                created_at: {
                    reference: "scalar",
                    columnType: "timestamptz",
                    type: "date",
                    nullable: false,
                    onCreate: expect.any(Function),
                    defaultRaw: "now()",
                    name: "created_at",
                    fieldName: "created_at",
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    columnType: "timestamptz",
                    type: "date",
                    nullable: false,
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    defaultRaw: "now()",
                    name: "updated_at",
                    fieldName: "updated_at",
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    columnType: "timestamptz",
                    type: "date",
                    nullable: true,
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    getter: false,
                    setter: false,
                },
            });
            const teamMetaData = core_1.MetadataStorage.getMetadataFromDecorator(Team);
            expect(teamMetaData.className).toEqual("Team");
            expect(teamMetaData.path).toEqual("Team");
            expect(teamMetaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                name: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "name",
                    fieldName: "name",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                users: {
                    reference: "m:n",
                    name: "users",
                    entity: "User",
                    owner: true,
                    inversedBy: "teams",
                    pivotEntity: "TeamUsers",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(User);
            expect(metaData.className).toEqual("User");
            expect(metaData.path).toEqual("User");
            expect(metaData.properties).toEqual({
                id: {
                    reference: "scalar",
                    type: "number",
                    columnType: "integer",
                    name: "id",
                    fieldName: "id",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                username: {
                    reference: "scalar",
                    type: "string",
                    columnType: "text",
                    name: "username",
                    fieldName: "username",
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                teams: {
                    reference: "m:n",
                    name: "teams",
                    entity: "Team",
                    owner: false,
                    pivotEntity: "TeamUsers",
                    mappedBy: "users",
                },
                created_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "created_at",
                    fieldName: "created_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                updated_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "updated_at",
                    fieldName: "updated_at",
                    defaultRaw: "now()",
                    onCreate: expect.any(Function),
                    onUpdate: expect.any(Function),
                    nullable: false,
                    getter: false,
                    setter: false,
                },
                deleted_at: {
                    reference: "scalar",
                    type: "date",
                    columnType: "timestamptz",
                    name: "deleted_at",
                    fieldName: "deleted_at",
                    nullable: true,
                    getter: false,
                    setter: false,
                },
            });
        });
        test("throw error when both sides of relationship defines the pivot table", () => {
            const team = entity_builder_1.model.define("team", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                users: entity_builder_1.model.manyToMany(() => user, {
                    pivotTable: "user_teams",
                }),
            });
            const user = entity_builder_1.model.define("user", {
                id: entity_builder_1.model.number(),
                username: entity_builder_1.model.text(),
                teams: entity_builder_1.model.manyToMany(() => team, {
                    pivotTable: "team_users",
                    mappedBy: "users",
                }),
            });
            expect(() => (0, create_mikro_orm_entity_1.toMikroORMEntity)(user)).toThrow(`Invalid relationship reference for "User.teams". Define "pivotTable", "joinColumn", or "inverseJoinColumn" on only one side of the relationship`);
        });
    });
    describe("Entity builder | checks", () => {
        test("should define checks for an entity", () => {
            const group = entity_builder_1.model
                .define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
            })
                .checks([
                (columns) => {
                    (0, expect_type_1.expectTypeOf)(columns).toEqualTypeOf();
                    return `${columns.id} > 1`;
                },
            ]);
            const Group = (0, create_mikro_orm_entity_1.toMikroORMEntity)(group);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(Group);
            expect(metaData.checks).toHaveLength(1);
            expect(metaData.checks[0].expression.toString()).toMatchInlineSnapshot(`
        "(columns)=>{
                            (0, _expecttype.expectTypeOf)(columns).toEqualTypeOf();
                            return \`\${columns.id} > 1\`;
                        }"
      `);
        });
        test("should define checks as an object", () => {
            const group = entity_builder_1.model
                .define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
            })
                .checks([
                {
                    name: "my_custom_check",
                    expression: (columns) => {
                        (0, expect_type_1.expectTypeOf)(columns).toEqualTypeOf();
                        return `${columns.id} > 1`;
                    },
                },
            ]);
            const Group = (0, create_mikro_orm_entity_1.toMikroORMEntity)(group);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(Group);
            expect(metaData.checks).toHaveLength(1);
            expect(metaData.checks[0].name).toEqual("my_custom_check");
            expect(metaData.checks[0].expression.toString()).toMatchInlineSnapshot(`
        "(columns)=>{
                                (0, _expecttype.expectTypeOf)(columns).toEqualTypeOf();
                                return \`\${columns.id} > 1\`;
                            }"
      `);
        });
        test("should infer foreign keys inside the checks callback", () => {
            const group = entity_builder_1.model
                .define("group", {
                id: entity_builder_1.model.number(),
                name: entity_builder_1.model.text(),
                parent_group: entity_builder_1.model.belongsTo(() => group, {
                    mappedBy: "groups",
                }),
                groups: entity_builder_1.model.hasMany(() => group, {
                    mappedBy: "parent_group",
                }),
            })
                .checks([
                (columns) => {
                    (0, expect_type_1.expectTypeOf)(columns).toEqualTypeOf();
                    return `${columns.id} > 1`;
                },
            ]);
            const Group = (0, create_mikro_orm_entity_1.toMikroORMEntity)(group);
            const metaData = core_1.MetadataStorage.getMetadataFromDecorator(Group);
            expect(metaData.checks).toHaveLength(1);
        });
    });
});
//# sourceMappingURL=entity-builder.spec.js.map