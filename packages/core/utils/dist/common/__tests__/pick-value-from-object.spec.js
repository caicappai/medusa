"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_value_from_object_1 = require("../pick-value-from-object");
describe("pickValueFromObject", function () {
    it("should return true or false for different types of data", function () {
        const expectations = [
            {
                input: {
                    1: "attribute.another_attribute",
                    2: {
                        attribute: {
                            another_attribute: "test",
                        },
                    },
                },
                output: "test",
            },
            {
                input: {
                    1: "attribute.another_attribute.array_attribute",
                    2: {
                        attribute: {
                            another_attribute: [
                                {
                                    array_attribute: "test 1",
                                },
                                {
                                    array_attribute: "test 2",
                                },
                            ],
                        },
                    },
                },
                output: ["test 1", "test 2"],
            },
            {
                input: {
                    1: "attribute.another_attribute.array_attribute.deep_array_attribute",
                    2: {
                        attribute: {
                            another_attribute: [
                                {
                                    array_attribute: [
                                        {
                                            deep_array_attribute: "test 1",
                                        },
                                        {
                                            deep_array_attribute: "test 2",
                                        },
                                    ],
                                },
                                {
                                    array_attribute: [],
                                },
                            ],
                        },
                    },
                },
                output: ["test 1", "test 2"],
            },
            {
                input: {
                    1: "attribute.another_attribute.array_attribute",
                    2: {
                        attribute: {
                            another_attribute: [
                                {
                                    array_attribute: [
                                        {
                                            deep_array_attribute: "test 1",
                                        },
                                        {
                                            deep_array_attribute: "test 2",
                                        },
                                    ],
                                },
                                {
                                    array_attribute: [],
                                },
                            ],
                        },
                    },
                },
                output: [
                    {
                        deep_array_attribute: "test 1",
                    },
                    {
                        deep_array_attribute: "test 2",
                    },
                ],
            },
            {
                input: {
                    1: "attribute.missing_attribute",
                    2: {
                        attribute: {
                            another_attribute: "test",
                        },
                    },
                },
                output: undefined,
            },
        ];
        expectations.forEach((expectation) => {
            expect((0, pick_value_from_object_1.pickValueFromObject)(expectation.input["1"], expectation.input["2"])).toEqual(expectation.output);
        });
    });
});
//# sourceMappingURL=pick-value-from-object.spec.js.map