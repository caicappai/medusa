"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const big_number_1 = require("../properties/big-number");
describe("Big Number property", () => {
    test("create bigNumber property type", () => {
        const property = new big_number_1.BigNumberProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("age")).toEqual({
            fieldName: "age",
            dataType: {
                name: "bigNumber",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=big-number-property.spec.js.map