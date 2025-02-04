import { BaseProperty } from "./base";
import { PrimaryKeyModifier } from "./primary-key";
/**
 * The NumberProperty is used to define a numeric/integer
 * property
 */
export declare class NumberProperty extends BaseProperty<number> {
    protected dataType: {
        name: "number";
        options: {};
    };
    /**
     * This method indicates that the property is the data model's primary key.
     *
     * @example
     * import { model } from "@medusajs/framework/utils"
     *
     * const Product = model.define("Product", {
     *   code: model.number().primaryKey(),
     *   // ...
     * })
     *
     * export default Product
     *
     * @customNamespace Property Configuration Methods
     */
    primaryKey(): PrimaryKeyModifier<number, NumberProperty>;
    constructor(options?: {
        primaryKey?: boolean;
    });
}
//# sourceMappingURL=number.d.ts.map