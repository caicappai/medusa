"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProductCsvStep = exports.parseProductCsvStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const normalize_for_import_1 = require("../helpers/normalize-for-import");
const normalize_v1_import_1 = require("../helpers/normalize-v1-import");
const utlils_1 = require("../utlils");
exports.parseProductCsvStepId = "parse-product-csv";
/**
 * This step parses a CSV file holding products to import.
 */
exports.parseProductCsvStep = (0, workflows_sdk_1.createStep)(exports.parseProductCsvStepId, async (fileContent, { container }) => {
    const regionService = container.resolve(utils_1.Modules.REGION);
    const productService = container.resolve(utils_1.Modules.PRODUCT);
    const salesChannelService = container.resolve(utils_1.Modules.SALES_CHANNEL);
    const csvProducts = (0, utlils_1.convertCsvToJson)(fileContent);
    const [productTypes, productCollections, salesChannels] = await Promise.all([
        productService.listProductTypes({}, {}),
        productService.listProductCollections({}, {}),
        salesChannelService.listSalesChannels({}, {}),
    ]);
    const v1Normalized = (0, normalize_v1_import_1.normalizeV1Products)(csvProducts, {
        productTypes,
        productCollections,
        salesChannels,
    });
    // We use the handle to group products and variants correctly.
    v1Normalized.forEach((product) => {
        if (!product["Product Handle"]) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Product handle is required when importing products");
        }
    });
    const [allRegions, allTags] = await Promise.all([
        regionService.listRegions({}, { select: ["id", "name", "currency_code"] }),
        productService.listProductTags({}, { select: ["id", "value"] }),
    ]);
    const normalizedData = (0, normalize_for_import_1.normalizeForImport)(v1Normalized, {
        regions: allRegions,
        tags: allTags,
    });
    return new workflows_sdk_1.StepResponse(normalizedData);
});
//# sourceMappingURL=parse-product-csv.js.map