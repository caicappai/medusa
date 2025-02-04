declare class BaseStepErrror extends Error {
    #private;
    constructor(name: any, message?: string, stepResponse?: unknown);
    getStepResponse(): unknown;
}
export declare class PermanentStepFailureError extends BaseStepErrror {
    static isPermanentStepFailureError(error: Error): error is PermanentStepFailureError;
    constructor(message?: string, stepResponse?: unknown);
}
export declare class SkipStepResponse extends BaseStepErrror {
    static isSkipStepResponse(error: Error): error is SkipStepResponse;
    constructor(message?: string, stepResponse?: unknown);
}
export declare class TransactionStepTimeoutError extends BaseStepErrror {
    static isTransactionStepTimeoutError(error: Error): error is TransactionStepTimeoutError;
    constructor(message?: string, stepResponse?: unknown);
}
export declare class TransactionTimeoutError extends BaseStepErrror {
    static isTransactionTimeoutError(error: Error): error is TransactionTimeoutError;
    constructor(message?: string, stepResponse?: unknown);
}
export {};
//# sourceMappingURL=errors.d.ts.map