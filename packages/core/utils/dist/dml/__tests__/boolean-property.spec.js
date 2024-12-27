"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const boolean_1 = require("../properties/boolean");
describe("Boolean property", () => {
    test("create boolean property type", () => {
        const property = new boolean_1.BooleanProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("isAdmin")).toEqual({
            fieldName: "isAdmin",
            dataType: {
                name: "boolean",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=boolean-property.spec.js.map