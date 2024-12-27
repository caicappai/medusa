"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const text_1 = require("../properties/text");
const has_many_1 = require("../relations/has-many");
describe("HasMany relationship", () => {
    test("define hasMany relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new has_many_1.HasMany(entityRef, {});
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "hasMany",
            nullable: false,
            searchable: false,
            options: {},
            entity: entityRef,
        });
    });
    test("should identify has many relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        let relationship = new has_many_1.HasMany(entityRef, {});
        expect(has_many_1.HasMany.isHasMany(relationship)).toEqual(true);
        relationship = {};
        expect(has_many_1.HasMany.isHasMany(relationship)).toEqual(false);
    });
});
//# sourceMappingURL=has-many-relationship.spec.js.map