"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remove_undefined_1 = require("../remove-undefined");
describe("removeUndefined", function () {
    it("should remove all undefined fields from an object", function () {
        const withUndefined = {
            foo: undefined,
            bar: "baz",
            foo2: null,
        };
        expect(withUndefined.hasOwnProperty("foo")).toBe(true);
        const output = (0, remove_undefined_1.removeUndefined)(withUndefined);
        expect(output.hasOwnProperty("foo")).toBe(false);
        expect(output.hasOwnProperty("bar")).toBe(true);
        expect(output.hasOwnProperty("foo2")).toBe(true);
    });
    it("should return an empty object as-is", function () {
        const output = (0, remove_undefined_1.removeUndefined)({});
        expect(output).toEqual({});
    });
});
//# sourceMappingURL=remove-undefined.spec.js.map