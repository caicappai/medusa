"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const base_1 = require("../properties/base");
const text_1 = require("../properties/text");
describe("Base property", () => {
    test("create a property type from base property", () => {
        class StringProperty extends base_1.BaseProperty {
            constructor() {
                super(...arguments);
                this.dataType = {
                    name: "text",
                };
            }
        }
        const property = new StringProperty();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("apply searchable modifier", () => {
        const property = new text_1.TextProperty().searchable();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
                options: {
                    searchable: true,
                },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("apply nullable modifier", () => {
        class StringProperty extends base_1.BaseProperty {
            constructor() {
                super(...arguments);
                this.dataType = {
                    name: "text",
                };
            }
        }
        const property = new StringProperty().nullable();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
            },
            nullable: true,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("apply computed property", () => {
        class StringProperty extends base_1.BaseProperty {
            constructor() {
                super(...arguments);
                this.dataType = {
                    name: "text",
                };
            }
        }
        const property = new StringProperty().computed();
        const property2 = new StringProperty().nullable().computed();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
            },
            nullable: false,
            computed: true,
            indexes: [],
            relationships: [],
        });
        (0, expect_type_1.expectTypeOf)(property2["$dataType"]).toEqualTypeOf();
        expect(property2.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
            },
            nullable: true,
            computed: true,
            indexes: [],
            relationships: [],
        });
    });
    test("define default value", () => {
        class StringProperty extends base_1.BaseProperty {
            constructor() {
                super(...arguments);
                this.dataType = {
                    name: "text",
                };
            }
        }
        const property = new StringProperty().default("foo");
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("username")).toEqual({
            fieldName: "username",
            dataType: {
                name: "text",
            },
            defaultValue: "foo",
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=base-property.spec.js.map