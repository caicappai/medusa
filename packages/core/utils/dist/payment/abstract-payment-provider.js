"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPaymentProvider = void 0;
exports.isPaymentProviderError = isPaymentProviderError;
class AbstractPaymentProvider {
    /**
     * This method validates the options of the provider set in `medusa-config.ts`.
     * Implementing this method is optional. It's useful if your provider requires custom validation.
     *
     * If the options aren't valid, throw an error.
     *
     * @param options - The provider's options.
     *
     * @example
     * class MyPaymentProviderService extends AbstractPaymentProvider<Options> {
     *   static validateOptions(options: Record<any, any>) {
     *     if (!options.apiKey) {
     *       throw new MedusaError(
     *         MedusaError.Types.INVALID_DATA,
     *         "API key is required in the provider's options."
     *       )
     *     }
     *   }
     * }
     */
    static validateOptions(options) { }
    /**
     * You can use the `constructor` of the provider's service to access resources in your module's container.
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * The provider can also access the module's options as a second parameter.
     *
     * @param {Record<string, unknown>} cradle - The module's container cradle used to resolve resources.
     * @param {Record<string, unknown>} config - The options passed to the Payment Module provider.
     *
     * @example
     * ```ts
     * import {
     *   AbstractPaymentProvider
     * } from "@medusajs/framework/utils"
     * import { Logger } from "@medusajs/framework/types"
     *
     * type InjectedDependencies = {
     *   logger: Logger
     * }
     *
     * type Options = {
     *   apiKey: string
     * }
     *
     * class MyPaymentProviderService extends AbstractPaymentProvider<
     *   Options
     * > {
     *   static identifier = "my-payment"
     *   protected logger_: Logger
     *   protected options_: Options
     *   // Assuming you're using a client to integrate
     *   // with a third-party service
     *   protected client
     *
     *   constructor(
     *     { logger }: InjectedDependencies,
     *     options: Options
     *   ) {
     *     // @ts-ignore
     *     super(...arguments)
     *
     *     this.logger_ = logger
     *     this.options_ = options
     *
     *     // Assuming you're initializing a client
     *     this.client = new Client(options)
     *   }
     *
     *   // ...
     * }
     *
     * export default MyPaymentProviderService
     * ```
     */
    constructor(cradle, 
    /**
     * @ignore
     */
    config = {} // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        this.config = config;
        this.container = cradle;
    }
    /**
     * @ignore
     */
    static isPaymentProvider(object) {
        return object?.constructor?._isPaymentProvider;
    }
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    getIdentifier() {
        const ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error(`Missing static property "identifier".`);
        }
        return ctr.identifier;
    }
}
exports.AbstractPaymentProvider = AbstractPaymentProvider;
/**
 * @ignore
 */
AbstractPaymentProvider._isPaymentProvider = true;
/**
 * @ignore
 */
function isPaymentProviderError(obj) {
    return (obj &&
        typeof obj === "object" &&
        "error" in obj &&
        "code" in obj &&
        "detail" in obj);
}
//# sourceMappingURL=abstract-payment-provider.js.map