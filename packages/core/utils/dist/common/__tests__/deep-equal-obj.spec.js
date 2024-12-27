"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deep_equal_obj_1 = require("../deep-equal-obj");
describe("deepEqualObj", function () {
    it("should return true if objects are equal", function () {
        const object1 = {
            foo: "bar",
            bar: "foo",
            xar: { foo: "bar", wor: { bar: "foo", ror: ["test", "test1"] } },
        };
        const object2 = {
            foo: "bar",
            bar: "foo",
            xar: { foo: "bar", wor: { bar: "foo", ror: ["test", "test1"] } },
        };
        expect((0, deep_equal_obj_1.deepEqualObj)(object1, object2)).toBe(true);
    });
    it("should return false if objects are not equal", function () {
        const object1 = {
            foo: "bar",
            bar: "foo",
            xar: { foo: "bar", wor: { bar: "foo", ror: ["test", "test1"] } },
        };
        const object2 = {
            foo: "bar",
            bar: "foo",
            xar: { foo: "bar", wor: { bar: "foo", ror: ["test", "test1_"] } },
        };
        expect((0, deep_equal_obj_1.deepEqualObj)(object1, object2)).toBe(false);
    });
});
//# sourceMappingURL=deep-equal-obj.spec.js.map