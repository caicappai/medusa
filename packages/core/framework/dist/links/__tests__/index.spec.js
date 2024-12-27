"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const link_loader_1 = require("../link-loader");
const modules_sdk_1 = require("@medusajs/modules-sdk");
describe("LinkLoader", () => {
    const rootDir = (0, path_1.join)(__dirname, "../__fixtures__", "links");
    it("should register each link in the '/links' folder and sub folder", async () => {
        let links = modules_sdk_1.MedusaModule.getCustomLinks();
        expect(links.length).toBe(0);
        await new link_loader_1.LinkLoader(rootDir).load();
        links = modules_sdk_1.MedusaModule.getCustomLinks();
        expect(links.length).toBe(2);
    });
});
//# sourceMappingURL=index.spec.js.map