"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const enum_1 = require("../properties/enum");
describe("Enum property", () => {
    test("create enum property type", () => {
        const property = new enum_1.EnumProperty(["admin", "moderator", "editor"]);
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("role")).toEqual({
            fieldName: "role",
            dataType: {
                name: "enum",
                options: {
                    choices: ["admin", "moderator", "editor"],
                },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("apply nullable modifier", () => {
        const property = new enum_1.EnumProperty([
            "admin",
            "moderator",
            "editor",
        ]).nullable();
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("role")).toEqual({
            fieldName: "role",
            dataType: {
                name: "enum",
                options: {
                    choices: ["admin", "moderator", "editor"],
                },
            },
            nullable: true,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("use typescript enum as enum property options", () => {
        let Roles;
        (function (Roles) {
            Roles[Roles["ADMIN"] = 0] = "ADMIN";
            Roles[Roles["WRITER"] = 1] = "WRITER";
            Roles[Roles["EDITOR"] = 2] = "EDITOR";
        })(Roles || (Roles = {}));
        const property = new enum_1.EnumProperty(Roles);
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("role")).toEqual({
            fieldName: "role",
            dataType: {
                name: "enum",
                options: {
                    choices: ["ADMIN", "WRITER", "EDITOR", 0, 1, 2],
                },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
    test("use typescript enum with key-value pair as enum property options", () => {
        let Roles;
        (function (Roles) {
            Roles["ADMIN"] = "admin";
            Roles["WRITER"] = "writer";
            Roles["EDITOR"] = "editor";
        })(Roles || (Roles = {}));
        const property = new enum_1.EnumProperty(Roles);
        (0, expect_type_1.expectTypeOf)(property["$dataType"]).toEqualTypeOf();
        expect(property.parse("role")).toEqual({
            fieldName: "role",
            dataType: {
                name: "enum",
                options: {
                    choices: ["admin", "writer", "editor"],
                },
            },
            nullable: false,
            computed: false,
            indexes: [],
            relationships: [],
        });
    });
});
//# sourceMappingURL=enum-schema.spec.js.map