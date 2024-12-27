"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plurailze_1 = require("../plurailze");
describe("pluralize", function () {
    it("should pluralize any words", function () {
        const words = [
            "apple",
            "box",
            "day",
            "country",
            "baby",
            "knife",
            "hero",
            "potato",
            "address",
            "info",
        ];
        const expectedOutput = [
            "apples",
            "boxes",
            "days",
            "countries",
            "babies",
            "knives",
            "heroes",
            "potatoes",
            "addresses",
            "info",
        ];
        words.forEach((word, index) => {
            expect((0, plurailze_1.pluralize)(word)).toBe(expectedOutput[index]);
        });
    });
});
//# sourceMappingURL=pluralize.spec.js.map