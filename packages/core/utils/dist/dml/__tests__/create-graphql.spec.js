"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_builder_1 = require("../entity-builder");
const create_graphql_1 = require("../helpers/create-graphql");
describe("GraphQL builder", () => {
    test("should generate the proper graphql output for the given entities definition", () => {
        const tag = entity_builder_1.model.define("tag", {
            id: entity_builder_1.model.id(),
            value: entity_builder_1.model.text(),
        });
        const email = entity_builder_1.model.define("email", {
            email: entity_builder_1.model.text(),
            isVerified: entity_builder_1.model.boolean(),
        });
        const user = entity_builder_1.model.define("user", {
            id: entity_builder_1.model.id(),
            username: entity_builder_1.model.text(),
            email: entity_builder_1.model.hasOne(() => email, { mappedBy: "owner" }),
            spend_limit: entity_builder_1.model.bigNumber(),
            phones: entity_builder_1.model.array(),
            group: entity_builder_1.model.belongsTo(() => group, { mappedBy: "users" }),
            role: entity_builder_1.model
                .enum(["moderator", "admin", "guest", "new_user"])
                .default("guest"),
            tags: entity_builder_1.model.manyToMany(() => tag, {
                pivotTable: "custom_user_tags",
            }),
        });
        const group = entity_builder_1.model.define("group", {
            id: entity_builder_1.model.number(),
            name: entity_builder_1.model.text(),
            users: entity_builder_1.model.hasMany(() => user),
        });
        const toGql = (0, create_graphql_1.toGraphQLSchema)([tag, email, user, group]);
        const expected = `
      type Tag {
        id: ID!
        value: String!
        created_at: DateTime!
        updated_at: DateTime!
        deleted_at: DateTime
      }

      type Email {
        email: String!
        isVerified: Boolean!
        created_at: DateTime!
        updated_at: DateTime!
        deleted_at: DateTime
      }

      extend type Email {
        owner: User!
      }

      enum UserRoleEnum {
        MODERATOR
        ADMIN
        GUEST
        NEW_USER
      }

      type User {
        id: ID!
        username: String!
        email: Email!
        spend_limit: String!
        phones: [String]!
        group: Group!
        role: UserRoleEnum!
        tags: [Tag]!
        raw_spend_limit: JSON!
        created_at: DateTime!
        updated_at: DateTime!
        deleted_at: DateTime
      }

      type Group {
        id: Int!
        name: String!
        users: [User]!
        created_at: DateTime!
        updated_at: DateTime!
        deleted_at: DateTime
      }
      `;
        expect(toGql.replace(/\s/g, "")).toEqual(expected.replace(/\s/g, ""));
    });
});
//# sourceMappingURL=create-graphql.spec.js.map