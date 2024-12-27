"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remove_undefined_properties_1 = require("../remove-undefined-properties");
describe("removeUndefinedProperties", () => {
    it("should remove all undefined properties from an input object", () => {
        const inputObj = {
            test: undefined,
            test1: "test1",
            test2: null,
            test3: {
                test3_1: undefined,
                test3_2: "test3_2",
                test3_3: null,
            },
            test4: [
                undefined,
                null,
                "null",
                [1, 2, undefined],
                {
                    test4_1: undefined,
                    test4_2: "test4_2",
                    test4_3: null,
                },
            ],
        };
        const cleanObject = (0, remove_undefined_properties_1.removeUndefinedProperties)(inputObj);
        expect(cleanObject).toEqual({
            test1: "test1",
            test2: null,
            test3: {
                test3_2: "test3_2",
                test3_3: null,
            },
            test4: [
                null,
                null,
                [1, 2],
                {
                    test4_2: "test4_2",
                    test4_3: null,
                },
            ],
        });
    });
});
//# sourceMappingURL=remove-undefined-properties.spec.js.map