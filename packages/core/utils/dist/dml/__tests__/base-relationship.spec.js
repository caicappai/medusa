"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const text_1 = require("../properties/text");
const base_1 = require("../relations/base");
describe("Base relationship", () => {
    test("define a custom relationship", () => {
        class HasOne extends base_1.BaseRelationship {
            constructor() {
                super(...arguments);
                this.type = "hasOne";
            }
        }
        const user = {
            username: new text_1.TextProperty(),
        };
        const entityRef = () => user;
        const relationship = new HasOne(entityRef, {
            mappedBy: "user_id",
        });
        (0, expect_type_1.expectTypeOf)(relationship["$dataType"]).toEqualTypeOf();
        expect(relationship.parse("user")).toEqual({
            name: "user",
            type: "hasOne",
            nullable: false,
            options: { mappedBy: "user_id" },
            mappedBy: "user_id",
            entity: entityRef,
            searchable: false,
        });
    });
});
//# sourceMappingURL=base-relationship.spec.js.map