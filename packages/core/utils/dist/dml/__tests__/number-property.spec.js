"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const number_1 = require("../properties/number");
describe("Number property", () => {
    test("create number property type", () => {
        const property = new number_1.NumberProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("age")).toEqual({
            fieldName: "age",
            dataType: {
                name: "number",
                options: {},
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=number-property.spec.js.map