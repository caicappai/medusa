"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const id_1 = require("../properties/id");
describe("Id property", () => {
    test("create id property type", () => {
        const property = new id_1.IdProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("id")).toEqual({
            fieldName: "id",
            dataType: {
                name: "id",
                options: {},
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("create id property type with marking it as a primary key", () => {
        const property = new id_1.IdProperty().primaryKey();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("id")).toEqual({
            fieldName: "id",
            dataType: {
                name: "id",
                options: {},
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
            primaryKey: true,
        });
    });
});
//# sourceMappingURL=id-property.spec.js.map