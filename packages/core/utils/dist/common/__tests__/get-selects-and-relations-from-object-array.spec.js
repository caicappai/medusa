"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_selects_and_relations_from_object_array_1 = require("../get-selects-and-relations-from-object-array");
describe("getSelectsAndRelationsFromObjectArray", function () {
    it("should return true or false for different types of data", function () {
        const expectations = [
            {
                input: [
                    {
                        attr_string: "string",
                        attr_boolean: true,
                        attr_null: null,
                        attr_undefined: undefined,
                        attr_object: {
                            attr_string: "string",
                            attr_boolean: true,
                            attr_null: null,
                            attr_undefined: undefined,
                        },
                        metadata: {
                            is_test: true,
                            nested_object: {
                                deeply_nested: true,
                            },
                        },
                        attr_array: [
                            {
                                attr_object: {
                                    attr_string: "string",
                                    attr_boolean: true,
                                    attr_null: null,
                                    attr_undefined: undefined,
                                },
                            },
                            {
                                attr_object: {
                                    attr_string: "string",
                                },
                            },
                        ],
                    },
                ],
                output: {
                    selects: [
                        "attr_string",
                        "attr_boolean",
                        "attr_null",
                        "attr_undefined",
                        "attr_object.attr_string",
                        "attr_object.attr_boolean",
                        "attr_object.attr_null",
                        "attr_object.attr_undefined",
                        "metadata.is_test",
                        "metadata.nested_object.deeply_nested",
                        "attr_array.attr_object.attr_string",
                        "attr_array.attr_object.attr_boolean",
                        "attr_array.attr_object.attr_null",
                        "attr_array.attr_object.attr_undefined",
                    ],
                    relations: ["attr_object", "attr_array", "attr_array.attr_object"],
                },
            },
        ];
        expectations.forEach((expectation) => {
            expect((0, get_selects_and_relations_from_object_array_1.getSelectsAndRelationsFromObjectArray)(expectation.input)).toEqual(expectation.output);
        });
    });
});
//# sourceMappingURL=get-selects-and-relations-from-object-array.spec.js.map