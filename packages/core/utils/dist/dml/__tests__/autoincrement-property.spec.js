"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const autoincrement_1 = require("../properties/autoincrement");
describe("Autoincrement property", () => {
    test("create autoincrement property type", () => {
        const property = new autoincrement_1.AutoIncrementProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("display_id")).toEqual({
            fieldName: "display_id",
            dataType: {
                name: "serial",
                options: {},
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=autoincrement-property.spec.js.map