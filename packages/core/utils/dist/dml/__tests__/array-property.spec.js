"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const array_1 = require("../properties/array");
describe("Array property", () => {
    test("should create an array property type", () => {
        const property = new array_1.ArrayProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("codes")).toEqual({
            fieldName: "codes",
            dataType: {
                name: "array",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=array-property.spec.js.map