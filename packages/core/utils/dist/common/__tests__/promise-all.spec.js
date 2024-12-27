"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_all_1 = require("../promise-all");
const os_1 = require("os");
describe("promiseAll", function () {
    it("should throw an error if any of the promises throw", async function () {
        const res = await (0, promise_all_1.promiseAll)([
            Promise.resolve(1),
            (async () => {
                throw new Error("error");
            })(),
            Promise.resolve(3),
        ]).catch((e) => e);
        expect(res.message).toBe("error");
    });
    it("should throw errors if any of the promises throw and aggregate them", async function () {
        const res = await (0, promise_all_1.promiseAll)([
            Promise.resolve(1),
            (async () => {
                throw new Error("error");
            })(),
            (async () => {
                throw new Error("error2");
            })(),
            Promise.resolve(3),
        ], {
            aggregateErrors: true,
        }).catch((e) => e);
        expect(res.message).toBe(["error", "error2"].join(os_1.EOL));
    });
    it("should return all values if all promises are fulfilled", async function () {
        const res = await (0, promise_all_1.promiseAll)([
            Promise.resolve(1),
            Promise.resolve(2),
            Promise.resolve(3),
        ]);
        expect(res).toEqual([1, 2, 3]);
    });
    it("should return all values if all promises are fulfilled including waiting for nested promises", async function () {
        const res = await (0, promise_all_1.promiseAll)([
            Promise.resolve(1),
            (async () => {
                await (0, promise_all_1.promiseAll)([Promise.resolve(1), Promise.resolve(2)]);
            })(),
            Promise.resolve(3),
        ]);
        expect(res).toEqual([1, undefined, 3]);
    });
});
//# sourceMappingURL=promise-all.spec.js.map