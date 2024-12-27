"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service = class TestService {
    static validateOptions(options) {
        throw new Error("Wrong options");
    }
};
exports.default = {
    services: [service],
};
//# sourceMappingURL=default-with-fail-validation.js.map