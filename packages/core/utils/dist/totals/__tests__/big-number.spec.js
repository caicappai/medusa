"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const big_number_1 = require("../big-number");
describe("BigNumber", function () {
    describe("constructor", function () {
        it("should set and return number", function () {
            const number = new big_number_1.BigNumber(42);
            expect(JSON.stringify(number)).toEqual(JSON.stringify(42));
        });
        it("should set BigNumber and return number", function () {
            const number = new big_number_1.BigNumber({
                value: "42",
            });
            expect(JSON.stringify(number)).toEqual(JSON.stringify(42));
        });
        it("should set string and return number", function () {
            const number = new big_number_1.BigNumber("42");
            expect(JSON.stringify(number)).toEqual(JSON.stringify(42));
        });
        it("should set bignumber.js and return number", function () {
            const bn = new bignumber_js_1.BigNumber("42");
            const number = new big_number_1.BigNumber(bn);
            expect(JSON.stringify(number)).toEqual(JSON.stringify(42));
        });
        it("should throw if not correct type", function () {
            // @ts-ignore
            expect(() => new big_number_1.BigNumber([])).toThrow("Invalid BigNumber value: . Should be one of: string, number, BigNumber (bignumber.js), BigNumberRawValue");
            expect(() => new big_number_1.BigNumber(null)).toThrow("Invalid BigNumber value: null. Should be one of: string, number, BigNumber (bignumber.js), BigNumberRawValue");
            expect(() => new big_number_1.BigNumber(undefined)).toThrow("Invalid BigNumber value: undefined. Should be one of: string, number, BigNumber (bignumber.js), BigNumberRawValue");
        });
    });
});
//# sourceMappingURL=big-number.spec.js.map