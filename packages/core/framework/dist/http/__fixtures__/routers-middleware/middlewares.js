"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mocks_1 = require("../mocks");
const define_middlewares_1 = require("../../utils/define-middlewares");
const customersGlobalMiddleware = (req, res, next) => {
    (0, mocks_1.customersGlobalMiddlewareMock)();
    next();
};
const customersCreateMiddleware = (req, res, next) => {
    (0, mocks_1.customersCreateMiddlewareMock)();
    next();
};
const storeGlobal = (req, res, next) => {
    (0, mocks_1.storeGlobalMiddlewareMock)();
    next();
};
exports.default = (0, define_middlewares_1.defineMiddlewares)([
    {
        matcher: "/customers",
        middlewares: [customersGlobalMiddleware],
    },
    {
        method: "POST",
        matcher: "/customers",
        middlewares: [customersCreateMiddleware],
    },
    {
        matcher: "/store/*",
        middlewares: [storeGlobal],
    },
    {
        matcher: "/webhooks/*",
        method: "POST",
        bodyParser: false,
        middlewares: [(0, express_1.raw)({ type: "application/json" })],
    },
]);
//# sourceMappingURL=middlewares.js.map