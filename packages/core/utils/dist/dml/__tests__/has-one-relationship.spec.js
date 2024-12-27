"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const text_1 = require("../properties/text");
const has_one_1 = require("../relations/has-one");
const has_one_fk_1 = require("../relations/has-one-fk");
describe("HasOne relationship", () => {
    test("define hasOne relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new has_one_1.HasOne(entityRef, {});
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "hasOne",
            nullable: false,
            options: {},
            searchable: false,
            entity: entityRef,
        });
    });
    test("mark relationship as nullable", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new has_one_1.HasOne(entityRef, {}).nullable();
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "hasOne",
            nullable: true,
            options: {},
            searchable: false,
            entity: entityRef,
        });
    });
    test("should identify has one relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        let relationship = new has_one_1.HasOne(entityRef, {});
        expect(has_one_1.HasOne.isHasOne(relationship)).toEqual(true);
        relationship = {};
        expect(has_one_1.HasOne.isHasOne(relationship)).toEqual(false);
    });
    test("enable foreign keys for has one relationship", () => {
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new has_one_fk_1.HasOneWithForeignKey(entityRef, {});
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "hasOneWithFK",
            nullable: false,
            options: {},
            searchable: false,
            entity: entityRef,
        });
    });
});
//# sourceMappingURL=has-one-relationship.spec.js.map