"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const utils_1 = require("@medusajs/utils");
const validate_body_1 = require("../utils/validate-body");
const createLinkBody = () => {
    return zod_1.default.object({
        add: zod_1.default.array(zod_1.default.string()).optional(),
        remove: zod_1.default.array(zod_1.default.string()).optional(),
    });
};
describe("validateAndTransformBody", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should pass additionalDataValidator to validator factory", async () => {
        let mockRequest = {
            query: {},
            body: {
                additional_data: {},
            },
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        mockRequest.additionalDataValidator = zod_1.default
            .object({
            brand_id: zod_1.default.number(),
        })
            .nullish();
        const validatorFactory = (schema) => {
            return schema
                ? createLinkBody().extend({
                    additional_data: schema,
                })
                : createLinkBody();
        };
        let middleware = (0, validate_body_1.validateAndTransformBody)(validatorFactory);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction.mock.calls[0]).toEqual([
            new utils_1.MedusaError("invalid_data", `Invalid request: Field 'additional_data, brand_id' is required`),
        ]);
    });
    it("should allow additional_data to be undefined", async () => {
        let mockRequest = {
            query: {},
            body: {},
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        mockRequest.additionalDataValidator = zod_1.default
            .object({
            brand_id: zod_1.default.number(),
        })
            .nullish();
        const validatorFactory = (schema) => {
            return schema
                ? createLinkBody().extend({
                    additional_data: schema,
                })
                : createLinkBody();
        };
        let middleware = (0, validate_body_1.validateAndTransformBody)(validatorFactory);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction.mock.calls[0]).toEqual([]);
    });
    it("should allow additional_data nested properties to be undefined", async () => {
        let mockRequest = {
            query: {},
            body: {
                additional_data: {},
            },
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        mockRequest.additionalDataValidator = zod_1.default
            .object({
            brand_id: zod_1.default.number().optional(),
        })
            .nullish();
        const validatorFactory = (schema) => {
            return schema
                ? createLinkBody().extend({
                    additional_data: schema,
                })
                : createLinkBody();
        };
        let middleware = (0, validate_body_1.validateAndTransformBody)(validatorFactory);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction.mock.calls[0]).toEqual([]);
    });
});
//# sourceMappingURL=validate-body.spec.js.map