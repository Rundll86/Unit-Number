export interface AnyObject<T = Unit> { [key: string]: T; };
export type ExpandType<T> = T & { [key: string]: any };
export type PresetVM = ExpandType<{
    time: Unit,
    distance: Unit,
    velocity: Unit
}>;
export interface Unit {
    backName: string | string[];
    valueType: ValueType;
    ratio?: RatioType;
    advanceRate?: number;
};
export interface RatioType {
    parent?: Unit;
    child?: Unit;
};
export interface Ratio {
    parent: Unit;
    child: Unit;
};
export enum ValueType { NUMBER, RATIO };
export type NumberWithUnit = {
    value: number;
    unit: Unit;
};