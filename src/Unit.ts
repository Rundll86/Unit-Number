import { getAutoVM } from "./Common";
import { ValueType, RatioType, Unit, PresetVM, NumberWithUnit, Ratio, IsEqual } from "./DataStruct";
export function createUnit<T extends ValueType>(
    backName: IsEqual<T, ValueType.RATIO, "auto", string | string[]>,
    valueType: T,
    arg: IsEqual<T, ValueType.NUMBER, number, RatioType>
): Unit {
    let res: Unit = {
        backName,
        valueType,
        get wrapperBackName(): string | string[] {
            if (valueType === ValueType.NUMBER) {
                return this.backName;
            } else {
                return `${this.ratio?.child}/${this.ratio?.parent}`;
            };
        }
    };
    typeof arg === "number" ? res.advanceRate = arg : res.ratio = arg;
    return res;
};
export function automatic(source: Unit, varName: string): void {
    getAutoVM()[varName] = source;
};
export function readUnit(name: string): Unit {
    return getAutoVM()[name];
};
export function readUnitByBackName(name: string): Unit | null {
    let result: Unit | null = null;
    Object.values(getAutoVM()).forEach(e => {
        if (e.wrapperBackName === name) {
            result = e;
        };
    });
    return result;
};
export function createNumber(value: number | Ratio, unit: Unit): NumberWithUnit {
    return { value, unit };
};