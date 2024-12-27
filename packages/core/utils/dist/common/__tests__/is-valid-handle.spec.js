"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_handle_1 = require("../validate-handle");
describe("normalizeHandle", function () {
    it("should generate URL friendly handles", function () {
        const expectations = [
            {
                input: "the-fan-boy's-club",
                isValid: false,
            },
            {
                input: "@t-the-sky",
                isValid: false,
            },
            {
                input: "nouvelles-annees",
                isValid: true,
            },
            {
                input: "@t-the-sky",
                isValid: false,
            },
            {
                input: "user.product",
                isValid: false,
            },
            {
                input: 'sky"bar',
                isValid: false,
            },
        ];
        expectations.forEach((expectation) => {
            expect((0, validate_handle_1.isValidHandle)(expectation.input)).toEqual(expectation.isValid);
        });
    });
});
//# sourceMappingURL=is-valid-handle.spec.js.map