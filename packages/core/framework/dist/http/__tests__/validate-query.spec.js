"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSelectParams = void 0;
const zod_1 = __importDefault(require("zod"));
const utils_1 = require("@medusajs/utils");
const validate_query_1 = require("../utils/validate-query");
const restricted_fields_1 = require("../utils/restricted-fields");
const createSelectParams = () => {
    return zod_1.default.object({
        fields: zod_1.default.string().optional(),
    });
};
exports.createSelectParams = createSelectParams;
const createFindParams = ({ offset, limit, order, } = {}) => {
    const selectParams = (0, exports.createSelectParams)();
    return selectParams.merge(zod_1.default.object({
        offset: zod_1.default.preprocess((val) => {
            if (val && typeof val === "string") {
                return parseInt(val);
            }
            return val;
        }, zod_1.default
            .number()
            .optional()
            .default(offset ?? 0)),
        limit: zod_1.default.preprocess((val) => {
            if (val && typeof val === "string") {
                return parseInt(val);
            }
            return val;
        }, zod_1.default
            .number()
            .optional()
            .default(limit ?? 20)),
        order: order
            ? zod_1.default.string().optional().default(order)
            : zod_1.default.string().optional(),
    }));
};
describe("validateAndTransformQuery", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should transform the input query", async () => {
        let mockRequest = {
            restrictedFields: new restricted_fields_1.RestrictedFields(),
            query: {},
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        const expectations = ({ offset, limit, inputOrder, transformedOrder, }) => {
            expect(mockRequest.validatedQuery).toEqual({
                offset,
                limit,
                order: inputOrder,
            });
            expect(mockRequest.filterableFields).toEqual({});
            expect(mockRequest.listConfig).toEqual({
                take: limit,
                skip: offset,
                select: [
                    "id",
                    "created_at",
                    "updated_at",
                    "deleted_at",
                    "metadata.id",
                    "metadata.parent.id",
                    "metadata.children.id",
                    "metadata.product.id",
                ],
                relations: [
                    "metadata",
                    "metadata.parent",
                    "metadata.children",
                    "metadata.product",
                ],
                order: transformedOrder,
            });
            expect(mockRequest.remoteQueryConfig).toEqual({
                fields: [
                    "id",
                    "created_at",
                    "updated_at",
                    "deleted_at",
                    "metadata.id",
                    "metadata.parent.id",
                    "metadata.children.id",
                    "metadata.product.id",
                ],
                pagination: {
                    order: transformedOrder,
                    skip: offset,
                    take: limit,
                },
            });
        };
        let queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        let middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expectations({
            limit: 20,
            offset: 0,
            inputOrder: undefined,
        });
        mockRequest = {
            ...mockRequest,
            query: {
                limit: "10",
                offset: "5",
                order: "created_at",
            },
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expectations({
            limit: 10,
            offset: 5,
            inputOrder: "created_at",
            transformedOrder: { created_at: "ASC" },
        });
        mockRequest = {
            ...mockRequest,
            query: {
                limit: "10",
                offset: "5",
                order: "created_at",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expectations({
            limit: 10,
            offset: 5,
            inputOrder: "created_at",
            transformedOrder: { created_at: "ASC" },
        });
    });
    it("should transform the input query taking into account the fields symbols (+,- or no symbol)", async () => {
        let mockRequest = {
            restrictedFields: new restricted_fields_1.RestrictedFields(),
            query: {
                fields: "id",
            },
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        let queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        let middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(mockRequest.listConfig).toEqual(expect.objectContaining({
            select: ["id"],
        }));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "+test_prop,-prop-test-something",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "prop-test-something",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(mockRequest.listConfig).toEqual(expect.objectContaining({
            select: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "test_prop",
            ],
        }));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "+test_prop,-updated_at",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(mockRequest.listConfig).toEqual(expect.objectContaining({
            select: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "test_prop",
            ],
        }));
    });
    it(`should transform the input and manage the allowed fields and relations properly without error`, async () => {
        const restrictedFields = new restricted_fields_1.RestrictedFields();
        let mockRequest = {
            restrictedFields,
            query: {
                fields: "product.*, *product.variants,+product.id",
            },
        };
        restrictedFields.add(["product"]);
        const mockResponse = {};
        const nextFunction = jest.fn();
        let queryConfig = {
            defaults: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product",
                "product.variants",
            ],
            isList: true,
        };
        let middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(mockRequest.listConfig).toEqual(expect.objectContaining({
            select: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product.id",
            ],
            relations: [
                "metadata",
                "metadata.parent",
                "metadata.children",
                "metadata.product",
                "product",
                "product.variants",
            ],
        }));
        expect(mockRequest.remoteQueryConfig).toEqual(expect.objectContaining({
            fields: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product.id",
                "product.*",
                "product.variants.*",
            ],
        }));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "store.name",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product",
                "product.variants",
                "store.name",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(mockRequest.listConfig).toEqual(expect.objectContaining({
            select: ["store.name", "id"],
            relations: ["store"],
        }));
        expect(mockRequest.remoteQueryConfig).toEqual(expect.objectContaining({
            fields: ["store.name", "id"],
        }));
    });
    it("should throw when attempting to transform the input if disallowed fields are requested", async () => {
        let mockRequest = {
            restrictedFields: new restricted_fields_1.RestrictedFields(),
            query: {
                fields: "+test_prop",
            },
        };
        const mockResponse = {};
        const nextFunction = jest.fn();
        let queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        let middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [test_prop] are not valid`));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "product",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [product] are not valid`));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "store",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product",
                "product.variants",
                "store.name",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [store] are not valid`));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "*product",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [product] are not valid`));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "*product.variants",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [product.variants] are not valid`));
        mockRequest = {
            ...mockRequest,
            query: {
                fields: "*product",
            },
        };
        queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            allowed: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
                "product.title",
            ],
            isList: true,
        };
        middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [product] are not valid`));
    });
    it("should throw when attempting to transform the input if restricted fields are requested", async () => {
        const restrictedFields = new restricted_fields_1.RestrictedFields();
        let mockRequest = {
            restrictedFields,
            query: {
                fields: "*product",
            },
        };
        restrictedFields.add(["product"]);
        const mockResponse = {};
        const nextFunction = jest.fn();
        const queryConfig = {
            defaults: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "metadata.id",
                "metadata.parent.id",
                "metadata.children.id",
                "metadata.product.id",
            ],
            isList: true,
        };
        const middleware = (0, validate_query_1.validateAndTransformQuery)(createFindParams(), queryConfig);
        await middleware(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenLastCalledWith(new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Requested fields [metadata.product.id, product] are not valid`));
    });
});
//# sourceMappingURL=validate-query.spec.js.map