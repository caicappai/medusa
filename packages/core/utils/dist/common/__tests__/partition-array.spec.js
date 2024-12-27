"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
describe("partitionArray", function () {
    it("should split array according to predicate", function () {
        const res = (0, index_1.partitionArray)([1, 2, 3, 4, 5], (x) => x % 2 === 0);
        expect(res).toEqual([
            [2, 4],
            [1, 3, 5],
        ]);
    });
});
//# sourceMappingURL=partition-array.spec.js.map