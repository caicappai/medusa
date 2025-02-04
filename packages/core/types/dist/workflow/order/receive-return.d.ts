import { BigNumberInput } from "../../totals";
interface ReceiveReturnItem {
    id: string;
    quantity: BigNumberInput;
    internal_note?: string;
    metadata?: Record<string, any> | null;
}
export interface BeginReceiveOrderReturnWorkflowInput {
    return_id: string;
    created_by?: string;
    description?: string;
    internal_note?: string;
    metadata?: Record<string, any> | null;
}
export interface ReceiveOrderReturnItemsWorkflowInput {
    return_id: string;
    items: ReceiveReturnItem[];
}
export interface ReceiveCompleteOrderReturnWorkflowInput {
    return_id: string;
    created_by?: string;
    items: ReceiveReturnItem[];
    description?: string;
    internal_note?: string;
    metadata?: Record<string, any> | null;
}
export interface UpdateReceiveItemReturnRequestWorkflowInput {
    return_id: string;
    action_id: string;
    data: {
        quantity?: BigNumberInput;
        internal_note?: string | null;
    };
}
export {};
//# sourceMappingURL=receive-return.d.ts.map