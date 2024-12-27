"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
describe("Query", () => {
    describe("Infer via queryConfig", () => {
        it("should infer return type of a known entry", async () => {
            const graph = (() => { });
            const result = await graph({
                entity: "product",
                fields: ["handle", "id"],
            });
            (0, expect_type_1.expectTypeOf)(result).toEqualTypeOf();
        });
        it("should infer as any for an known entry", async () => {
            const graph = (() => { });
            const result = await graph({
                entity: "foo",
                fields: ["handle", "id"],
            });
            (0, expect_type_1.expectTypeOf)(result).toEqualTypeOf();
        });
    });
});
//# sourceMappingURL=query.spec.js.map