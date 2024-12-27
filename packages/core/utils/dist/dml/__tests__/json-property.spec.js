"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const json_1 = require("../properties/json");
describe("JSON property", () => {
    test("create json property type", () => {
        const property = new json_1.JSONProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("coordinates")).toEqual({
            fieldName: "coordinates",
            dataType: {
                name: "json",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("create json property with default value", () => {
        const property = new json_1.JSONProperty().default({ a: 1 });
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("coordinates")).toEqual({
            fieldName: "coordinates",
            dataType: {
                name: "json",
            },
            defaultValue: {
                a: 1,
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=json-property.spec.js.map