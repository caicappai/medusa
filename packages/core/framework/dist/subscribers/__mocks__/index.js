"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBusServiceMock = void 0;
exports.eventBusServiceMock = {
    subscribe: jest.fn().mockImplementation((...args) => {
        return Promise.resolve(args);
    }),
};
//# sourceMappingURL=index.js.map