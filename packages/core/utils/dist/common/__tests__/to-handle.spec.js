"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_handle_1 = require("../to-handle");
const validate_handle_1 = require("../validate-handle");
describe("normalizeHandle", function () {
    describe("should generate URL friendly handles", function () {
        const expectations = [
            {
                input: "The fan boy's club",
                output: "the-fan-boys-club",
            },
            {
                input: "nouvelles années",
                output: "nouvelles-annees",
            },
            {
                input: "25% OFF",
                output: "25-off",
            },
            {
                input: "25% de réduction",
                output: "25-de-reduction",
            },
            {
                input: "-first-product",
                output: "-first-product",
                invalid: true,
            },
            {
                input: "user.product",
                output: "userproduct",
            },
            {
                input: "_first-product",
                output: "-first-product",
                invalid: true,
            },
            {
                input: "_HELLO_WORLD",
                output: "-hello-world",
                invalid: true,
            },
            {
                input: "title: Hello - World",
                output: "title-hello-world",
            },
            {
                input: "hiphenated - title - __bold__",
                output: "hiphenated-title-bold-",
                invalid: true,
            },
        ];
        expectations.forEach((expectation) => {
            const handle = (0, to_handle_1.toHandle)(expectation.input);
            it(`should convert "${expectation.input}" to "${expectation.output}"`, () => {
                expect(handle).toEqual(expectation.output);
                expect((0, validate_handle_1.isValidHandle)(handle)).toBe(!expectation.invalid);
            });
        });
    });
});
//# sourceMappingURL=to-handle.spec.js.map