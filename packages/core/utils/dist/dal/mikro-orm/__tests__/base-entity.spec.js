"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const base_entity_1 = require("../base-entity");
describe("BaseEntity", () => {
    it("should handle the id generation using the provided prefix", async () => {
        let Entity1 = class Entity1 extends base_entity_1.BaseEntity {
            constructor() {
                super({ prefix_id: "prod" });
            }
        };
        Entity1 = __decorate([
            (0, core_1.Entity)(),
            __metadata("design:paramtypes", [])
        ], Entity1);
        const orm = await core_1.MikroORM.init({
            entities: [Entity1],
            dbName: "test",
            type: "postgresql",
        });
        const manager = orm.em.fork();
        const entity1 = manager.create(Entity1, {});
        expect(entity1.id).toMatch(/prod_[0-9]/);
        await orm.close();
    });
    it("should handle the id generation without a provided prefix using the first three letter of the entity lower cased", async () => {
        let Entity1 = class Entity1 extends base_entity_1.BaseEntity {
        };
        Entity1 = __decorate([
            (0, core_1.Entity)()
        ], Entity1);
        const orm = await core_1.MikroORM.init({
            entities: [Entity1],
            dbName: "test",
            type: "postgresql",
        });
        const manager = orm.em.fork();
        const entity1 = manager.create(Entity1, {});
        expect(entity1.id).toMatch(/ent_[0-9]/);
        await orm.close();
    });
    it("should handle the id generation without a provided prefix inferring it based on the words composing the entity name excluding model and entity as part of the name", async () => {
        let ProductModel = class ProductModel extends base_entity_1.BaseEntity {
        };
        ProductModel = __decorate([
            (0, core_1.Entity)()
        ], ProductModel);
        let ProductCategoryEntity = class ProductCategoryEntity extends base_entity_1.BaseEntity {
        };
        ProductCategoryEntity = __decorate([
            (0, core_1.Entity)()
        ], ProductCategoryEntity);
        let ProductOptionValue = class ProductOptionValue extends base_entity_1.BaseEntity {
        };
        ProductOptionValue = __decorate([
            (0, core_1.Entity)()
        ], ProductOptionValue);
        const orm = await core_1.MikroORM.init({
            entities: [ProductModel, ProductCategoryEntity, ProductOptionValue],
            dbName: "test",
            type: "postgresql",
        });
        const manager = orm.em.fork();
        const product = manager.create(ProductModel, {});
        const productCategory = manager.create(ProductCategoryEntity, {});
        const productOptionValue = manager.create(ProductOptionValue, {});
        expect(product.id).toMatch(/pro_[0-9]/);
        expect(productCategory.id).toMatch(/prc_[0-9]/);
        expect(productOptionValue.id).toMatch(/pov_[0-9]/);
        await orm.close();
    });
    it("should handle the id generation even with custom onInit or beforeCreate", async () => {
        let ProductModel = class ProductModel extends base_entity_1.BaseEntity {
            onInit() {
                this.custom_prop = "custom";
            }
        };
        __decorate([
            (0, core_1.Property)(),
            __metadata("design:type", String)
        ], ProductModel.prototype, "custom_prop", void 0);
        __decorate([
            (0, core_1.OnInit)(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ProductModel.prototype, "onInit", null);
        ProductModel = __decorate([
            (0, core_1.Entity)()
        ], ProductModel);
        let ProductCategoryEntity = class ProductCategoryEntity extends base_entity_1.BaseEntity {
            onInit() {
                this.custom_prop = "custom";
            }
        };
        __decorate([
            (0, core_1.Property)(),
            __metadata("design:type", String)
        ], ProductCategoryEntity.prototype, "custom_prop", void 0);
        __decorate([
            (0, core_1.OnInit)(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ProductCategoryEntity.prototype, "onInit", null);
        ProductCategoryEntity = __decorate([
            (0, core_1.Entity)()
        ], ProductCategoryEntity);
        let ProductOptionValue = class ProductOptionValue extends base_entity_1.BaseEntity {
            onInit() {
                this.custom_prop = "custom";
            }
        };
        __decorate([
            (0, core_1.Property)(),
            __metadata("design:type", String)
        ], ProductOptionValue.prototype, "custom_prop", void 0);
        __decorate([
            (0, core_1.OnInit)(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], ProductOptionValue.prototype, "onInit", null);
        ProductOptionValue = __decorate([
            (0, core_1.Entity)()
        ], ProductOptionValue);
        const orm = await core_1.MikroORM.init({
            entities: [ProductModel, ProductCategoryEntity, ProductOptionValue],
            dbName: "test",
            type: "postgresql",
        });
        const manager = orm.em.fork();
        const product = manager.create(ProductModel, {});
        const productCategory = manager.create(ProductCategoryEntity, {});
        const productOptionValue = manager.create(ProductOptionValue, {});
        expect(product.id).toMatch(/pro_[0-9]/);
        expect(productCategory.id).toMatch(/prc_[0-9]/);
        expect(productOptionValue.id).toMatch(/pov_[0-9]/);
        expect(product.custom_prop).toBe("custom");
        expect(productCategory.custom_prop).toBe("custom");
        expect(productOptionValue.custom_prop).toBe("custom");
        await orm.close();
    });
});
//# sourceMappingURL=base-entity.spec.js.map