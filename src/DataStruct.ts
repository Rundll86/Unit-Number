export interface AnyObject<T = Unit> { [key: string]: T; };
export type IsEqual<T, U, A, B> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? A : B;
export type ExpandType<T> = T & { [key: string]: T[keyof T] };
export type PresetVM = ExpandType<{
    time: Unit,
    distance: Unit,
    velocity: Unit
}>;
let a:PresetVM;
export interface Unit {
    backName: string | string[];
    valueType: ValueType;
    ratio?: RatioType;
    advanceRate?: number;
    get wrapperBackName(): string | string[];
};
export interface RatioType {
    parent: Unit;
    child: Unit;
};
export interface Ratio {
    parent: Unit;
    child: Unit;
};
export enum ValueType { NUMBER, RATIO };
export type NumberWithUnit = {
    value: number | Ratio;
    unit: Unit | null;
};