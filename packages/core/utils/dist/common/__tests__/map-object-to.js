"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_object_to_1 = require("../map-object-to");
const input = {
    a: [{ id: "1" }, { id: "2" }],
    b: [{ id: "3" }, { id: "4", handle: "handle1" }],
    c: [{ id: "5", sku: "sku1" }, { id: "6" }],
};
const mapToConfig = {
    a: [{ mapTo: "a.id", valueFrom: "id" }],
    b: [
        { mapTo: "b.id", valueFrom: "id" },
        { mapTo: "b.handle", valueFrom: "handle" },
    ],
    c: [
        { mapTo: "c.id", valueFrom: "id" },
        { mapTo: "c.sku", valueFrom: "sku" },
    ],
};
describe("mapObjectTo", function () {
    it("should return a new object with the keys remapped and the values picked from the original object based on the map config", function () {
        const remappedObject = (0, map_object_to_1.mapObjectTo)(input, mapToConfig);
        expect(remappedObject).toEqual({
            "a.id": ["1", "2"],
            "b.id": ["3", "4"],
            "b.handle": ["handle1"],
            "c.id": ["5", "6"],
            "c.sku": ["sku1"],
        });
    });
    it("should return a new object with only the picked properties", function () {
        const remappedObject = (0, map_object_to_1.mapObjectTo)(input, mapToConfig, {
            pick: ["a.id"],
        });
        expect(remappedObject).toEqual({
            "a.id": ["1", "2"],
        });
    });
});
//# sourceMappingURL=map-object-to.js.map