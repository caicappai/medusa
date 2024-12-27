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
const big_number_1 = require("../../../totals/big-number");
const big_number_field_1 = require("../big-number-field");
let TestAmount = class TestAmount {
    constructor() {
        this.nullable_amount = null;
        this.raw_nullable_amount = null;
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], TestAmount.prototype, "id", void 0);
__decorate([
    (0, big_number_field_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Object)
], TestAmount.prototype, "amount", void 0);
__decorate([
    (0, big_number_field_1.MikroOrmBigNumberProperty)({ nullable: true }),
    __metadata("design:type", Object)
], TestAmount.prototype, "nullable_amount", void 0);
TestAmount = __decorate([
    (0, core_1.Entity)()
], TestAmount);
describe("@MikroOrmBigNumberProperty", () => {
    let orm;
    beforeEach(async () => {
        orm = await core_1.MikroORM.init({
            entities: [TestAmount],
            dbName: "test",
            type: "postgresql",
        });
    });
    afterEach(async () => {
        await orm.close();
    });
    it("should correctly assign and update BigNumber values", () => {
        const testAmount = new TestAmount();
        expect(testAmount.amount).toBeUndefined();
        expect(testAmount.raw_amount).toBeUndefined();
        testAmount.amount = 100;
        expect(testAmount.amount).toEqual(100);
        expect(testAmount.raw_amount).toEqual({
            value: "100",
            precision: 20,
        });
        try {
            ;
            testAmount.amount = null;
        }
        catch (e) {
            expect(e.message).toEqual("Invalid BigNumber value: null. Should be one of: string, number, BigNumber (bignumber.js), BigNumberRawValue");
        }
        testAmount.nullable_amount = null;
        expect(testAmount.nullable_amount).toEqual(null);
        // Update the amount
        testAmount.amount = 200;
        expect(testAmount.amount).toEqual(200);
        expect(testAmount.raw_amount).toEqual({
            value: "200",
            precision: 20,
        });
        // Update with big number
        testAmount.amount = new big_number_1.BigNumber(300, { precision: 5 });
        expect(testAmount.amount).toEqual(300);
        expect(testAmount.raw_amount).toEqual({ value: "300", precision: 5 });
    });
});
//# sourceMappingURL=big-number-field.spec.js.map