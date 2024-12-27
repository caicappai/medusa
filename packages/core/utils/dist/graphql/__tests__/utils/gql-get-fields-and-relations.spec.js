"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const schema_1 = require("@graphql-tools/schema");
const get_fields_and_relations_1 = require("../../get-fields-and-relations");
const userModule = `
type User {
  id: ID!
  name: String!
  blabla: WHATEVER
}

type Post {
  author: User!
}
`;
const postModule = `
type Post {
  id: ID!
  title: String!
  date: String
}

type User {
  posts: [Post!]!
}

type WHATEVER {
  random_field: String
  post: Post
}
`;
const mergedSchema = (0, merge_1.mergeTypeDefs)([userModule, postModule]);
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: mergedSchema,
});
const types = schema.getTypeMap();
describe("gqlGetFieldsAndRelations", function () {
    it("Should get all fields of a given entity", async function () {
        const fields = (0, get_fields_and_relations_1.gqlGetFieldsAndRelations)(types, "User");
        expect(fields).toEqual(expect.arrayContaining(["id", "name"]));
    });
    it("Should get all fields of a given entity and a relation", async function () {
        const fields = (0, get_fields_and_relations_1.gqlGetFieldsAndRelations)(types, "User", ["posts"]);
        expect(fields).toEqual(expect.arrayContaining([
            "id",
            "name",
            "posts.id",
            "posts.title",
            "posts.date",
        ]));
    });
    it("Should get all fields of a given entity and many relations", async function () {
        const fields = (0, get_fields_and_relations_1.gqlGetFieldsAndRelations)(types, "User", [
            "posts",
            "blabla",
            "blabla.post",
        ]);
        expect(fields).toEqual(expect.arrayContaining([
            "id",
            "name",
            "posts.id",
            "posts.title",
            "posts.date",
            "blabla.random_field",
            "blabla.post.id",
            "blabla.post.title",
            "blabla.post.date",
        ]));
    });
    it("Should get all fields of a given entity and many relations limited to the relations given", async function () {
        const fields = (0, get_fields_and_relations_1.gqlGetFieldsAndRelations)(types, "User", ["posts", "blabla"]);
        expect(fields).toEqual(expect.arrayContaining([
            "id",
            "name",
            "posts.id",
            "posts.title",
            "posts.date",
            "blabla.random_field",
        ]));
    });
});
//# sourceMappingURL=gql-get-fields-and-relations.spec.js.map