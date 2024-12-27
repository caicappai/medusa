"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deep_copy_1 = require("../deep-copy");
class TestA {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
class TestWrapper {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    factory() {
        return new TestA((0, deep_copy_1.deepCopy)(this.prop1), (0, deep_copy_1.deepCopy)(this.prop2));
    }
}
class TestWrapperWithoutDeepCopy {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    factory() {
        return new TestA(this.prop1, this.prop2);
    }
}
describe("deepCopy", () => {
    it("should deep copy an object", () => {
        const prop1 = {
            prop1: 1,
        };
        const prop2 = {
            prop1: 3,
        };
        const wrapperWithoutDeepCopy = new TestWrapperWithoutDeepCopy(prop1, prop2);
        let factory1 = wrapperWithoutDeepCopy.factory();
        let factory2 = wrapperWithoutDeepCopy.factory();
        factory1.prop1.prop1 = 2;
        expect(wrapperWithoutDeepCopy.prop1).toEqual({ prop1: 2 });
        expect(factory1.prop1).toEqual({ prop1: 2 });
        expect(factory2.prop1).toEqual({ prop1: 2 });
        prop1.prop1 = 4;
        prop2.prop1 = 4;
        const wrapper = new TestWrapper(prop1, prop2);
        factory1 = wrapper.factory();
        factory2 = wrapper.factory();
        factory1.prop1.prop1 = 2;
        expect(wrapper.prop1).toEqual({ prop1: 4 });
        expect(factory1.prop1).toEqual({ prop1: 2 });
        expect(factory2.prop1).toEqual({ prop1: 4 });
    });
});
//# sourceMappingURL=deep-copy.spec.js.map