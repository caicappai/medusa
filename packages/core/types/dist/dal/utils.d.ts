import { Constructor } from "../modules-sdk";
export type Dictionary<T = any> = {
    [k: string]: T;
};
type Query<T> = T extends object ? T extends Scalar ? never : FilterQuery<T> : FilterValue<T>;
type ExpandScalar<T> = null | (T extends string ? string | RegExp : T extends Date ? Date | string : T);
type Scalar = boolean | number | string | bigint | symbol | Date | RegExp | Buffer | {
    toHexString(): string;
};
type ReadonlyPrimary<T> = T extends any[] ? Readonly<T> : T;
declare const PrimaryKeyType: unique symbol;
type Primary<T> = T extends {
    [PrimaryKeyType]?: infer PK;
} ? ReadonlyPrimary<PK> : T extends {
    _id?: infer PK;
} ? ReadonlyPrimary<PK> | string : T extends {
    uuid?: infer PK;
} ? ReadonlyPrimary<PK> : T extends {
    id?: infer PK;
} ? ReadonlyPrimary<PK> : never;
export type OperatorMap<T> = {
    $and?: Query<T>[];
    $or?: Query<T>[];
    $eq?: ExpandScalar<T> | ExpandScalar<T>[];
    $ne?: ExpandScalar<T>;
    $in?: ExpandScalar<T>[];
    $nin?: ExpandScalar<T>[];
    $not?: Query<T>;
    $gt?: ExpandScalar<T>;
    $gte?: ExpandScalar<T>;
    $lt?: ExpandScalar<T>;
    $lte?: ExpandScalar<T>;
    $like?: string;
    $re?: string;
    $ilike?: string;
    $fulltext?: string;
    $overlap?: string[];
    $contains?: string[];
    $contained?: string[];
    $exists?: boolean;
};
type FilterValue2<T> = T | ExpandScalar<T> | Primary<T>;
type FilterValue<T> = OperatorMap<FilterValue2<T>> | FilterValue2<T> | FilterValue2<T>[] | null;
type PrevLimit = [never, 0, 1, 2];
export type FilterQueryProperties<T, Prev extends number = 3> = {
    [Key in keyof T]?: T[Key] extends boolean | number | string | bigint | symbol | Date ? T[Key] | OperatorMap<T[Key]> : T[Key] extends infer U ? U extends {
        [x: number]: infer V;
    } ? V extends object ? FilterQuery<Partial<V>, PrevLimit[Prev]> : never : never : never;
};
export type FilterQuery<T = any, Prev extends number = 3> = Prev extends never ? never : T extends Constructor<infer Prototype> ? FilterQueryProperties<Prototype, Prev> : FilterQueryProperties<T, Prev>;
export type Order<T> = {
    [key in keyof T]?: "ASC" | "DESC" | Order<T[key] extends Array<any> ? T[key][0] : T[key]>;
};
export {};
//# sourceMappingURL=utils.d.ts.map