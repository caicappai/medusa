"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const date_time_1 = require("../properties/date-time");
describe("DateTime property", () => {
    test("create datetime property type", () => {
        const property = new date_time_1.DateTimeProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("created_at")).toEqual({
            fieldName: "created_at",
            dataType: {
                name: "dateTime",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=date-time-property.spec.js.map