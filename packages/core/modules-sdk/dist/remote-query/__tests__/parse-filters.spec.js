"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_module_1 = require("../../medusa-module");
const get_entities_map_1 = require("../__fixtures__/get-entities-map");
require("../__fixtures__/parse-filters");
const parse_filters_1 = require("../parse-filters");
const entitiesMap = (0, get_entities_map_1.getEntitiesMap)(medusa_module_1.MedusaModule.getAllJoinerConfigs()
    .map((m) => m.schema)
    .join("\n"));
describe("parse-filters", () => {
    describe("Without operator map usage", () => {
        it(`should parse filter for a single level module with ambiguous entity`, () => {
            const filters = {
                id: "string",
                product: {
                    title: "test",
                },
            };
            const remoteQueryObject = {
                custom_product: {
                    fields: ["id", "product.*"],
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "custom_product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                custom_product: {
                    fields: ["id", "product.*"],
                    __args: {
                        filters: {
                            id: "string",
                            product: {
                                title: "test",
                            },
                        },
                    },
                },
            });
        });
        it("should parse filter for a single level module", () => {
            const filters = {
                id: "string",
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                        },
                    },
                },
            });
        });
        it("should parse filters through linked immediate relations", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    price_set: {
                        id: "id_test",
                        prices: {
                            amount: 50,
                        },
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        price_set: {
                            fields: ["id", "amount"],
                            prices: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        price_set: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    id: "id_test",
                                    prices: {
                                        amount: 50,
                                    },
                                },
                            },
                            prices: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            });
        });
        it("should parse filters through linked nested relations through configured field alias with forward args", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    prices: {
                        amount: 50,
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    prices: {
                                        amount: 50,
                                    },
                                },
                            },
                        },
                    },
                },
            });
        });
        it("should parse filters through linked deep nested relations through configured field alias with forward args", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    prices: {
                        amount: 50,
                        deep_nested_price: {
                            amount: 100,
                        },
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            deep_nested_price: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    prices: {
                                        amount: 50,
                                        deep_nested_price: {
                                            amount: 100,
                                        },
                                    },
                                },
                            },
                            deep_nested_price: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            });
        });
    });
    describe("With operator map usage", () => {
        it("should parse filter for a single level module", () => {
            const filters = {
                id: { $ilike: "%string%" },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: { $ilike: "%string%" },
                        },
                    },
                },
            });
        });
        it("should parse filters through linked immediate relations", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    price_set: {
                        id: "id_test",
                        prices: {
                            amount: {
                                $gte: 50,
                            },
                        },
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        price_set: {
                            fields: ["id", "amount"],
                            prices: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        price_set: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    id: "id_test",
                                    prices: {
                                        amount: {
                                            $gte: 50,
                                        },
                                    },
                                },
                            },
                            prices: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            });
        });
        it("should parse filters through linked nested relations through configured field alias with forward args", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    prices: {
                        amount: {
                            $lt: 50,
                        },
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    prices: {
                                        amount: { $lt: 50 },
                                    },
                                },
                            },
                        },
                    },
                },
            });
        });
        it("should parse filters through linked deep nested relations through configured field alias with forward args", () => {
            const filters = {
                id: "string",
                variants: {
                    sku: {
                        $eq: "string",
                    },
                    prices: {
                        deep_nested_price: {
                            amount: {
                                $gte: 100,
                            },
                        },
                    },
                },
            };
            const remoteQueryObject = {
                product: {
                    fields: ["id", "title", "variants"],
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            deep_nested_price: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            };
            (0, parse_filters_1.parseAndAssignFilters)({
                remoteQueryObject,
                entryPoint: "product",
                filters,
            }, entitiesMap);
            expect(remoteQueryObject).toEqual({
                product: {
                    fields: ["id", "title", "variants"],
                    __args: {
                        filters: {
                            id: "string",
                            variants: {
                                sku: {
                                    $eq: "string",
                                },
                            },
                        },
                    },
                    variants: {
                        fields: ["id", "sku", "prices"],
                        prices: {
                            fields: ["id", "amount"],
                            __args: {
                                filters: {
                                    prices: {
                                        deep_nested_price: {
                                            amount: { $gte: 100 },
                                        },
                                    },
                                },
                            },
                            deep_nested_price: {
                                fields: ["id", "amount"],
                            },
                        },
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=parse-filters.spec.js.map