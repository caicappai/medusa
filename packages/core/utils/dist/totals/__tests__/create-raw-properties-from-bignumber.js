"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_number_1 = require("../big-number");
const create_raw_properties_from_bignumber_1 = require("../create-raw-properties-from-bignumber");
describe("Create Raw properties from BigNumber", function () {
    it("should create raw properties from BigNumber properties", function () {
        const obj = {
            price: new big_number_1.BigNumber({
                value: "42",
                precision: 10,
            }),
            field: 111,
            metadata: {
                numeric_field: new big_number_1.BigNumber({
                    value: "100",
                }),
                random_field: 134,
            },
            abc: null,
            raw_abc: {
                value: "9.00000010000103991234",
                precision: 20,
            },
        };
        (0, create_raw_properties_from_bignumber_1.createRawPropertiesFromBigNumber)(obj);
        expect(obj).toEqual(expect.objectContaining({
            raw_price: {
                value: "42",
                precision: 10,
            },
            field: 111,
            metadata: expect.objectContaining({
                raw_numeric_field: {
                    value: "100",
                    precision: 20,
                },
                random_field: 134,
            }),
            abc: null,
            raw_abc: {
                value: "9.00000010000103991234",
                precision: 20,
            },
        }));
    });
    it("should create all properties containing BigNumber properties excluding selected ones", function () {
        const obj = {
            price: new big_number_1.BigNumber({
                value: "42",
                precision: 10,
            }),
            field: 111,
            metadata: {
                numeric_field: new big_number_1.BigNumber({
                    value: "100",
                }),
                random_field: 134,
            },
        };
        (0, create_raw_properties_from_bignumber_1.createRawPropertiesFromBigNumber)(obj, {
            exclude: ["metadata.numeric_field"],
        });
        expect(obj).toEqual({
            price: new big_number_1.BigNumber({
                value: "42",
                precision: 10,
            }),
            raw_price: {
                value: "42",
                precision: 10,
            },
            field: 111,
            metadata: {
                numeric_field: new big_number_1.BigNumber({
                    value: "100",
                }),
                random_field: 134,
            },
        });
    });
});
//# sourceMappingURL=create-raw-properties-from-bignumber.js.map