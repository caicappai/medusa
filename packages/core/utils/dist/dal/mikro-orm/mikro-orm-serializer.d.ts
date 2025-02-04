import { EntityDTO, Loaded, SerializeOptions } from "@mikro-orm/core";
export declare class EntitySerializer {
    static serialize<T extends object, P extends string = never>(entity: T, options?: SerializeOptions<T, P> & {
        preventCircularRef?: boolean;
    }, parents?: string[]): EntityDTO<Loaded<T, P>>;
    private static propertyName;
    private static processProperty;
    private static extractChildOptions;
    private static processEntity;
    private static processCollection;
}
export declare const mikroOrmSerializer: <TOutput extends object>(data: any, options?: Parameters<typeof EntitySerializer.serialize>[1] & {
    preventCircularRef?: boolean;
}) => Promise<TOutput>;
//# sourceMappingURL=mikro-orm-serializer.d.ts.map