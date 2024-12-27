"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const properties_1 = require("../properties");
describe("Float property", () => {
    test("create float property type", () => {
        const property = new properties_1.FloatProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("rate")).toEqual({
            fieldName: "rate",
            dataType: {
                name: "float",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=float-property.spec.js.map