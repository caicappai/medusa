"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const utils_1 = require("../__fixtures__/utils");
const mikro_orm_serializer_1 = require("../mikro-orm-serializer");
describe("mikroOrmSerializer", () => {
    beforeEach(async () => {
        await core_1.MikroORM.init({
            entities: [
                utils_1.Entity1WithUnDecoratedProp,
                utils_1.Entity2WithUnDecoratedProp,
                utils_1.Product,
                utils_1.ProductOption,
                utils_1.ProductOptionValue,
                utils_1.ProductVariant,
            ],
            dbName: "test",
            type: "postgresql",
        });
    });
    it("should serialize an entity", async () => {
        const entity1 = new utils_1.Entity1WithUnDecoratedProp({
            id: "1",
            deleted_at: null,
        });
        entity1.unknownProp = "calculated";
        const entity2 = new utils_1.Entity2WithUnDecoratedProp({
            id: "2",
            deleted_at: null,
            entity1: entity1,
        });
        entity1.entity2.add(entity2);
        const serialized = await (0, mikro_orm_serializer_1.mikroOrmSerializer)(entity1, {
            preventCircularRef: false,
        });
        expect(serialized).toEqual({
            id: "1",
            deleted_at: null,
            unknownProp: "calculated",
            entity2: [
                {
                    id: "2",
                    deleted_at: null,
                    entity1: {
                        id: "1",
                        deleted_at: null,
                        unknownProp: "calculated",
                    },
                    entity1_id: "1",
                },
            ],
        });
    });
    it("should serialize an array of entities", async () => {
        const entity1 = new utils_1.Entity1WithUnDecoratedProp({
            id: "1",
            deleted_at: null,
        });
        entity1.unknownProp = "calculated";
        const entity2 = new utils_1.Entity2WithUnDecoratedProp({
            id: "2",
            deleted_at: null,
            entity1: entity1,
        });
        entity1.entity2.add(entity2);
        const serialized = await (0, mikro_orm_serializer_1.mikroOrmSerializer)([entity1, entity1], {
            preventCircularRef: false,
        });
        const expectation = {
            id: "1",
            deleted_at: null,
            unknownProp: "calculated",
            entity2: [
                {
                    id: "2",
                    deleted_at: null,
                    entity1: {
                        id: "1",
                        deleted_at: null,
                        unknownProp: "calculated",
                    },
                    entity1_id: "1",
                },
            ],
        };
        expect(serialized).toEqual([expectation, expectation]);
    });
    it("should serialize an entity preventing circular relation reference", async () => {
        const entity1 = new utils_1.Entity1WithUnDecoratedProp({
            id: "1",
            deleted_at: null,
        });
        entity1.unknownProp = "calculated";
        const entity2 = new utils_1.Entity2WithUnDecoratedProp({
            id: "2",
            deleted_at: null,
            entity1: entity1,
        });
        entity1.entity2.add(entity2);
        const serialized = await (0, mikro_orm_serializer_1.mikroOrmSerializer)(entity1);
        expect(serialized).toEqual({
            id: "1",
            deleted_at: null,
            unknownProp: "calculated",
            entity2: [
                {
                    id: "2",
                    deleted_at: null,
                    entity1_id: "1",
                },
            ],
        });
    });
    it(`should properly serialize nested relations and sibling to not return parents into children`, async () => {
        const productOptionValue = new utils_1.ProductOptionValue();
        productOptionValue.id = "1";
        productOptionValue.name = "Product option value 1";
        productOptionValue.option_id = "1";
        const productOptions = new utils_1.ProductOption();
        productOptions.id = "1";
        productOptions.name = "Product option 1";
        productOptions.values.add(productOptionValue);
        const productVariant = new utils_1.ProductVariant();
        productVariant.id = "1";
        productVariant.name = "Product variant 1";
        productVariant.options.add(productOptionValue);
        const product = new utils_1.Product();
        product.id = "1";
        product.name = "Product 1";
        product.options.add(productOptions);
        product.variants.add(productVariant);
        const serialized = await (0, mikro_orm_serializer_1.mikroOrmSerializer)(product);
        expect(serialized).toEqual({
            id: "1",
            options: [
                {
                    id: "1",
                    values: [
                        {
                            id: "1",
                            variants: [
                                {
                                    id: "1",
                                    name: "Product variant 1",
                                },
                            ],
                            name: "Product option value 1",
                            option_id: "1",
                        },
                    ],
                    name: "Product option 1",
                },
            ],
            variants: [
                {
                    id: "1",
                    options: [
                        {
                            id: "1",
                            name: "Product option value 1",
                            option_id: "1",
                            option: {
                                id: "1",
                                name: "Product option 1",
                            },
                        },
                    ],
                    name: "Product variant 1",
                },
            ],
            name: "Product 1",
        });
    });
});
//# sourceMappingURL=mikro-orm-serializer.spec.js.map