"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_type_1 = require("expect-type");
const common_1 = require("../../common");
const dml_1 = require("../../dml");
const entities_1 = require("../__fixtures__/joiner-config/entities");
const definition_1 = require("../definition");
const joiner_config_builder_1 = require("../joiner-config-builder");
describe("joiner-config-builder", () => {
    describe("defineJoiner | Mikro orm objects", () => {
        it("should return a full joiner configuration", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                models: [
                    entities_1.FulfillmentSet,
                    entities_1.ShippingOption,
                    entities_1.ShippingProfile,
                    entities_1.Fulfillment,
                    entities_1.FulfillmentProvider,
                    entities_1.ServiceZone,
                    entities_1.GeoZone,
                    entities_1.ShippingOptionRule,
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: "",
                linkableKeys: {
                    fulfillment_set_id: entities_1.FulfillmentSet.name,
                    shipping_option_id: entities_1.ShippingOption.name,
                    shipping_profile_id: entities_1.ShippingProfile.name,
                    fulfillment_id: entities_1.Fulfillment.name,
                    fulfillment_provider_id: entities_1.FulfillmentProvider.name,
                    service_zone_id: entities_1.ServiceZone.name,
                    geo_zone_id: entities_1.GeoZone.name,
                    shipping_option_rule_id: entities_1.ShippingOptionRule.name,
                },
                alias: [
                    {
                        name: ["fulfillment_set", "fulfillment_sets"],
                        entity: entities_1.FulfillmentSet.name,
                        args: {
                            methodSuffix: "FulfillmentSets",
                        },
                    },
                    {
                        name: ["shipping_option", "shipping_options"],
                        entity: entities_1.ShippingOption.name,
                        args: {
                            methodSuffix: "ShippingOptions",
                        },
                    },
                    {
                        name: ["shipping_profile", "shipping_profiles"],
                        entity: entities_1.ShippingProfile.name,
                        args: {
                            methodSuffix: "ShippingProfiles",
                        },
                    },
                    {
                        name: ["fulfillment", "fulfillments"],
                        entity: entities_1.Fulfillment.name,
                        args: {
                            methodSuffix: "Fulfillments",
                        },
                    },
                    {
                        name: ["fulfillment_provider", "fulfillment_providers"],
                        entity: entities_1.FulfillmentProvider.name,
                        args: {
                            methodSuffix: "FulfillmentProviders",
                        },
                    },
                    {
                        name: ["service_zone", "service_zones"],
                        entity: entities_1.ServiceZone.name,
                        args: {
                            methodSuffix: "ServiceZones",
                        },
                    },
                    {
                        name: ["geo_zone", "geo_zones"],
                        entity: entities_1.GeoZone.name,
                        args: {
                            methodSuffix: "GeoZones",
                        },
                    },
                    {
                        name: ["shipping_option_rule", "shipping_option_rules"],
                        entity: entities_1.ShippingOptionRule.name,
                        args: {
                            methodSuffix: "ShippingOptionRules",
                        },
                    },
                ],
            });
        });
        it("should return a full joiner configuration with custom aliases", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {
                            methodSuffix: "Customs",
                        },
                    },
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: "",
                linkableKeys: {},
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {
                            methodSuffix: "Customs",
                        },
                    },
                ],
            });
        });
        it("should return a full joiner configuration with custom aliases and models", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                models: [
                    entities_1.FulfillmentSet,
                    entities_1.ShippingOption,
                    entities_1.ShippingProfile,
                    entities_1.Fulfillment,
                    entities_1.FulfillmentProvider,
                    entities_1.ServiceZone,
                    entities_1.GeoZone,
                    entities_1.ShippingOptionRule,
                ],
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {
                            methodSuffix: "Customs",
                        },
                    },
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: "",
                linkableKeys: {
                    fulfillment_set_id: entities_1.FulfillmentSet.name,
                    shipping_option_id: entities_1.ShippingOption.name,
                    shipping_profile_id: entities_1.ShippingProfile.name,
                    fulfillment_id: entities_1.Fulfillment.name,
                    fulfillment_provider_id: entities_1.FulfillmentProvider.name,
                    service_zone_id: entities_1.ServiceZone.name,
                    geo_zone_id: entities_1.GeoZone.name,
                    shipping_option_rule_id: entities_1.ShippingOptionRule.name,
                },
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {
                            methodSuffix: "Customs",
                        },
                    },
                    {
                        name: ["fulfillment_set", "fulfillment_sets"],
                        entity: entities_1.FulfillmentSet.name,
                        args: {
                            methodSuffix: "FulfillmentSets",
                        },
                    },
                    {
                        name: ["shipping_option", "shipping_options"],
                        entity: entities_1.ShippingOption.name,
                        args: {
                            methodSuffix: "ShippingOptions",
                        },
                    },
                    {
                        name: ["shipping_profile", "shipping_profiles"],
                        entity: entities_1.ShippingProfile.name,
                        args: {
                            methodSuffix: "ShippingProfiles",
                        },
                    },
                    {
                        name: ["fulfillment", "fulfillments"],
                        entity: entities_1.Fulfillment.name,
                        args: {
                            methodSuffix: "Fulfillments",
                        },
                    },
                    {
                        name: ["fulfillment_provider", "fulfillment_providers"],
                        entity: entities_1.FulfillmentProvider.name,
                        args: {
                            methodSuffix: "FulfillmentProviders",
                        },
                    },
                    {
                        name: ["service_zone", "service_zones"],
                        entity: entities_1.ServiceZone.name,
                        args: {
                            methodSuffix: "ServiceZones",
                        },
                    },
                    {
                        name: ["geo_zone", "geo_zones"],
                        entity: entities_1.GeoZone.name,
                        args: {
                            methodSuffix: "GeoZones",
                        },
                    },
                    {
                        name: ["shipping_option_rule", "shipping_option_rules"],
                        entity: entities_1.ShippingOptionRule.name,
                        args: {
                            methodSuffix: "ShippingOptionRules",
                        },
                    },
                ],
            });
        });
        it("should return a full joiner configuration with custom aliases without method suffix", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {},
                    },
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: "",
                linkableKeys: {},
                alias: [
                    {
                        name: ["custom", "customs"],
                        entity: "Custom",
                        args: {
                            methodSuffix: "Customs",
                        },
                    },
                ],
            });
        });
        it("should return a full joiner configuration with custom aliases overriding defaults", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                models: [entities_1.FulfillmentSet],
                alias: [
                    {
                        name: ["fulfillment_set", "fulfillment_sets"],
                        entity: "FulfillmentSet",
                        args: {
                            methodSuffix: "fulfillmentSetCustom",
                        },
                    },
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: "",
                linkableKeys: {
                    fulfillment_set_id: entities_1.FulfillmentSet.name,
                },
                alias: [
                    {
                        name: ["fulfillment_set", "fulfillment_sets"],
                        entity: "FulfillmentSet",
                        args: {
                            methodSuffix: "fulfillmentSetCustom",
                        },
                    },
                ],
            });
        });
    });
    describe("defineJoiner | DML objects", () => {
        it("should return a full joiner configuration", () => {
            const joinerConfig = (0, joiner_config_builder_1.defineJoinerConfig)(definition_1.Modules.FULFILLMENT, {
                models: [
                    entities_1.dmlFulfillmentSet,
                    entities_1.dmlShippingOption,
                    entities_1.dmlShippingProfile,
                    entities_1.dmlFulfillment,
                    entities_1.dmlFulfillmentProvider,
                    entities_1.dmlServiceZone,
                    entities_1.dmlGeoZone,
                    entities_1.dmlShippingOptionRule,
                ],
            });
            expect(joinerConfig).toEqual({
                serviceName: definition_1.Modules.FULFILLMENT,
                primaryKeys: ["id"],
                schema: expect.any(String),
                linkableKeys: {
                    fulfillment_set_id: entities_1.FulfillmentSet.name,
                    shipping_option_id: entities_1.ShippingOption.name,
                    shipping_profile_id: entities_1.ShippingProfile.name,
                    fulfillment_id: entities_1.Fulfillment.name,
                    fulfillment_provider_id: entities_1.FulfillmentProvider.name,
                    service_zone_id: entities_1.ServiceZone.name,
                    geo_zone_id: entities_1.GeoZone.name,
                    shipping_option_rule_id: entities_1.ShippingOptionRule.name,
                },
                alias: [
                    {
                        name: ["fulfillment_set", "fulfillment_sets"],
                        entity: entities_1.FulfillmentSet.name,
                        args: {
                            methodSuffix: "FulfillmentSets",
                        },
                    },
                    {
                        name: ["shipping_option", "shipping_options"],
                        entity: entities_1.ShippingOption.name,
                        args: {
                            methodSuffix: "ShippingOptions",
                        },
                    },
                    {
                        name: ["shipping_profile", "shipping_profiles"],
                        entity: entities_1.ShippingProfile.name,
                        args: {
                            methodSuffix: "ShippingProfiles",
                        },
                    },
                    {
                        name: ["fulfillment", "fulfillments"],
                        entity: entities_1.Fulfillment.name,
                        args: {
                            methodSuffix: "Fulfillments",
                        },
                    },
                    {
                        name: ["fulfillment_provider", "fulfillment_providers"],
                        entity: entities_1.FulfillmentProvider.name,
                        args: {
                            methodSuffix: "FulfillmentProviders",
                        },
                    },
                    {
                        name: ["service_zone", "service_zones"],
                        entity: entities_1.ServiceZone.name,
                        args: {
                            methodSuffix: "ServiceZones",
                        },
                    },
                    {
                        name: ["geo_zone", "geo_zones"],
                        entity: entities_1.GeoZone.name,
                        args: {
                            methodSuffix: "GeoZones",
                        },
                    },
                    {
                        name: ["shipping_option_rule", "shipping_option_rules"],
                        entity: entities_1.ShippingOptionRule.name,
                        args: {
                            methodSuffix: "ShippingOptionRules",
                        },
                    },
                ],
            });
            const schemaExpected = `type FulfillmentSet {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type ShippingOption {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type ShippingProfile {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type Fulfillment {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type FulfillmentProvider {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type ServiceZone {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type GeoZone {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }
          type ShippingOptionRule {
            id: ID!
            created_at: DateTime!
            updated_at: DateTime!
            deleted_at: DateTime
          }`;
            expect(joinerConfig.schema.replace(/\s/g, "")).toEqual(schemaExpected.replace(/\s/g, ""));
        });
    });
    describe("buildLinkableKeysFromDmlObjects", () => {
        it("should return a linkableKeys object based on the DML's primary keys", () => {
            const user = dml_1.model.define("user", {
                id: dml_1.model.id().primaryKey(),
                name: dml_1.model.text(),
            });
            const car = dml_1.model.define("car", {
                id: dml_1.model.id(),
                number_plate: dml_1.model.text().primaryKey(),
                test: dml_1.model.text(),
            });
            const linkableKeys = (0, joiner_config_builder_1.buildLinkableKeysFromDmlObjects)([user, car]);
            (0, expect_type_1.expectTypeOf)(linkableKeys).toMatchTypeOf();
            expect(linkableKeys).toEqual({
                user_id: (0, common_1.upperCaseFirst)(user.name),
                car_number_plate: (0, common_1.upperCaseFirst)(car.name),
            });
        });
    });
    describe("buildLinkableKeysFromMikroOrmObjects", () => {
        it("should return a linkableKeys object based on the mikro orm models name", () => {
            class User {
            }
            class Car {
            }
            const linkableKeys = (0, joiner_config_builder_1.buildLinkableKeysFromMikroOrmObjects)([Car, User]);
            expect(linkableKeys).toEqual({
                user_id: User.name,
                car_id: Car.name,
            });
        });
    });
    describe("buildLinkConfigFromLinkableKeys", () => {
        it("should return a link config object based on the linkable keys", () => {
            class User {
            }
            class Car {
            }
            const linkableKeys = (0, joiner_config_builder_1.buildLinkableKeysFromMikroOrmObjects)([Car, User]);
            const linkConfig = (0, joiner_config_builder_1.buildLinkConfigFromLinkableKeys)("myService", linkableKeys);
            expect(linkConfig).toEqual({
                car: {
                    id: {
                        field: "car",
                        entity: "Car",
                        linkable: "car_id",
                        primaryKey: "id",
                        serviceName: "myService",
                    },
                    toJSON: expect.any(Function),
                },
                user: {
                    id: {
                        field: "user",
                        entity: "User",
                        linkable: "user_id",
                        primaryKey: "id",
                        serviceName: "myService",
                    },
                    toJSON: expect.any(Function),
                },
            });
            expect(linkConfig.car.toJSON()).toEqual({
                field: "car",
                entity: "Car",
                linkable: "car_id",
                primaryKey: "id",
                serviceName: "myService",
            });
            expect(linkConfig.user.toJSON()).toEqual({
                field: "user",
                entity: "User",
                linkable: "user_id",
                primaryKey: "id",
                serviceName: "myService",
            });
        });
        it("should return a link config object based on the custom linkable keys", () => {
            const linkConfig = (0, joiner_config_builder_1.buildLinkConfigFromLinkableKeys)("myService", {
                user_id: "User",
                currency_code: "currency",
            });
            expect(linkConfig).toEqual({
                user: {
                    id: {
                        field: "user",
                        entity: "User",
                        linkable: "user_id",
                        primaryKey: "id",
                        serviceName: "myService",
                    },
                    toJSON: expect.any(Function),
                },
                currency: {
                    code: {
                        field: "currency",
                        entity: "Currency",
                        linkable: "currency_code",
                        primaryKey: "code",
                        serviceName: "myService",
                    },
                    toJSON: expect.any(Function),
                },
            });
            expect(linkConfig.user.toJSON()).toEqual({
                field: "user",
                entity: "User",
                linkable: "user_id",
                primaryKey: "id",
                serviceName: "myService",
            });
            expect(linkConfig.currency.toJSON()).toEqual({
                field: "currency",
                entity: "Currency",
                linkable: "currency_code",
                primaryKey: "code",
                serviceName: "myService",
            });
        });
    });
    describe("buildLinkConfigFromModelObjects", () => {
        it("should return a link config object based on the DML's primary keys", () => {
            const user = dml_1.model.define("user", {
                id: dml_1.model.id().primaryKey(),
                name: dml_1.model.text(),
            });
            const car = dml_1.model.define({ name: "car", tableName: "car" }, {
                id: dml_1.model.id(),
                number_plate: dml_1.model.text().primaryKey(),
            });
            const linkableKeysFromDml = (0, joiner_config_builder_1.buildLinkableKeysFromDmlObjects)([user, car]);
            const linkConfig = (0, joiner_config_builder_1.buildLinkConfigFromModelObjects)("myService", {
                user,
                car,
            }, linkableKeysFromDml);
            (0, expect_type_1.expectTypeOf)(linkConfig).toMatchTypeOf();
            expect(linkConfig.user.id).toEqual({
                serviceName: "myService",
                field: "user",
                entity: "User",
                linkable: "user_id",
                primaryKey: "id",
            });
            expect(linkConfig.car.number_plate).toEqual({
                serviceName: "myService",
                field: "car",
                entity: "Car",
                linkable: "car_number_plate",
                primaryKey: "number_plate",
            });
            expect(linkConfig.car.toJSON()).toEqual({
                serviceName: "myService",
                field: "car",
                entity: "Car",
                linkable: "car_id",
                primaryKey: "id",
            });
            expect(linkConfig.user.toJSON()).toEqual({
                serviceName: "myService",
                field: "user",
                entity: "User",
                linkable: "user_id",
                primaryKey: "id",
            });
        });
    });
});
//# sourceMappingURL=joiner-config-builder.spec.js.map