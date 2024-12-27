"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const text_1 = require("../properties/text");
const many_to_many_1 = require("../relations/many-to-many");
describe("ManyToMany relationship", () => {
    test("define manyToMany relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new many_to_many_1.ManyToMany(entityRef, {});
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "manyToMany",
            nullable: false,
            options: {},
            searchable: false,
            entity: entityRef,
        });
    });
    test("should identify many to many relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        let relationship = new many_to_many_1.ManyToMany(entityRef, {});
        expect(many_to_many_1.ManyToMany.isManyToMany(relationship)).toEqual(true);
        relationship = {};
        expect(many_to_many_1.ManyToMany.isManyToMany(relationship)).toEqual(false);
    });
});
//# sourceMappingURL=many-to-many.spec.js.map