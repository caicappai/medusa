"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_regexp_if_valid_1 = require("../build-regexp-if-valid");
describe("buildRegexpIfValid", function () {
    it("should return either a regexp or undefined", () => {
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("abc")).not.toBeDefined();
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("/abc/")).toBeTruthy();
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("/ab#/[c]/ig")).toBeTruthy();
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("@ab#/[c]@ig")).toBeTruthy();
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("/ab/[c/ig")).not.toBeDefined();
        expect((0, build_regexp_if_valid_1.buildRegexpIfValid)("/abc/gig")).not.toBeDefined();
    });
});
//# sourceMappingURL=build-regexp-if-valid.spec.js.map