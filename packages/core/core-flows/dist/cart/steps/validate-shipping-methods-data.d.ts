import { CartDTO, StockLocationDTO } from "@medusajs/types";
export type ValidateShippingMethodsDataInput = {
    id: string;
    provider_id: string;
    option_data: Record<string, unknown>;
    method_data: Record<string, unknown>;
    context: CartDTO & {
        from_location: StockLocationDTO;
        [k: string]: unknown;
    };
}[];
export declare const validateAndReturnShippingMethodsDataStepId = "validate-and-return-shipping-methods-data";
/**
 * This step validates shipping options to ensure they can be applied on a cart.
 */
export declare const validateAndReturnShippingMethodsDataStep: import("@medusajs/workflows-sdk").StepFunction<ValidateShippingMethodsDataInput, {
    [x: string]: Record<string, unknown>;
}[] | undefined>;
//# sourceMappingURL=validate-shipping-methods-data.d.ts.map