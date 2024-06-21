import { IsEqual, getAutoVM } from "./Common";
import { ValueType, RatioType, Unit, PresetVM } from "./DataStruct";
export function createUnit<T extends ValueType>(
    backName: IsEqual<T, ValueType.RATIO, "auto", string | string[]>,
    valueType: T,
    arg: IsEqual<T, ValueType.NUMBER, number, RatioType>
): Unit {
    let res: Unit = {
        backName,
        valueType,
    };
    typeof arg === "number" ? res.advanceRate = arg : res.ratio = arg;
    return res;
};
export function automatic(source: Unit, varName: string): void {
    getAutoVM()[varName] = source;
};
export function readUnit(name: keyof PresetVM | (string & {})): Unit {
    return getAutoVM()[name];
};