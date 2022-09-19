import { LktObject } from "lkt-ts-interfaces";
export declare const cloneObject: (obj: LktObject) => {
    [x: string]: any;
};
export declare const sortObjectProperties: (obj: LktObject) => LktObject;
export declare const fetchInObject: (obj: LktObject, key: string, separator?: string) => LktObject | undefined;
export declare const mergeObjects: (obj1: object, obj2: object) => object;
export declare const mergeCommonProperties: (obj1: LktObject, obj2: LktObject) => LktObject;
export declare const deleteObjectProperties: (obj: LktObject, keys: string[]) => LktObject;
