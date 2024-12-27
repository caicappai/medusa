"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deep_merge_1 = require("../deep-merge");
describe("Deep merge ", function () {
    it("should merge 2 objects", () => {
        const a = {
            x: 1,
            y: {
                z: 3,
                w: 4,
                a: {
                    b: 1,
                },
            },
        };
        const aCopy = JSON.parse(JSON.stringify(a));
        const b = {
            y: {
                w: 5,
                q: 6,
                a: {
                    c: 14,
                },
            },
            z: 2,
        };
        const bCopy = JSON.parse(JSON.stringify(b));
        const merged = (0, deep_merge_1.deepMerge)(a, b);
        expect(merged).toEqual({
            x: 1,
            y: {
                z: 3,
                w: 5,
                a: {
                    b: 1,
                    c: 14,
                },
                q: 6,
            },
            z: 2,
        });
        expect(a).toEqual(aCopy);
        expect(b).toEqual(bCopy);
    });
});
//# sourceMappingURL=deep-merge.js.map