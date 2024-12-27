"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const text_1 = require("../properties/text");
describe("Text property", () => {
    test("create text property type", () => {
        const property = new text_1.TextProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
                options: { searchable: false },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("mark text property as primary key", () => {
        const property = new text_1.TextProperty().primaryKey();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
                options: { searchable: false },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
            primaryKey: true,
        });
    });
});
//# sourceMappingURL=text-property.spec.js.map