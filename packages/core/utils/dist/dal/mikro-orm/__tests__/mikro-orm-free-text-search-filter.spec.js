"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const utils_1 = require("../__fixtures__/utils");
const mikro_orm_free_text_search_filter_1 = require("../mikro-orm-free-text-search-filter");
describe("mikroOrmFreeTextSearchFilterOptionsFactory", () => {
    let orm;
    beforeEach(async () => {
        orm = await core_1.MikroORM.init({
            entities: [utils_1.SearchableEntity1, utils_1.SearchableEntity2],
            dbName: "test",
            type: "postgresql",
        });
    });
    it("should return a filter function that filters entities based on the free text search value", async () => {
        const entityManager = orm.em.fork();
        const freeTextSearchValue = "search";
        const models = [utils_1.SearchableEntity1, utils_1.SearchableEntity2];
        let filterConstraints = (0, mikro_orm_free_text_search_filter_1.mikroOrmFreeTextSearchFilterOptionsFactory)(models).cond({
            value: freeTextSearchValue,
            fromEntity: utils_1.SearchableEntity1.name,
        }, "read", entityManager);
        expect(filterConstraints).toEqual({
            $or: [
                {
                    searchableField: {
                        $ilike: `%${freeTextSearchValue}%`,
                    },
                },
                {
                    entity2: {
                        $or: [
                            {
                                searchableField: {
                                    $ilike: `%${freeTextSearchValue}%`,
                                },
                            },
                        ],
                    },
                },
            ],
        });
        filterConstraints = (0, mikro_orm_free_text_search_filter_1.mikroOrmFreeTextSearchFilterOptionsFactory)(models).cond({
            value: freeTextSearchValue,
            fromEntity: utils_1.SearchableEntity2.name,
        }, "read", entityManager);
        expect(filterConstraints).toEqual({
            $or: [
                {
                    searchableField: {
                        $ilike: `%${freeTextSearchValue}%`,
                    },
                },
            ],
        });
    });
});
//# sourceMappingURL=mikro-orm-free-text-search-filter.spec.js.map