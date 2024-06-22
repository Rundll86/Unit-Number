import { NumberWithUnit, Unit } from "./DataStruct";
import { readUnit, readUnitByBackName } from "./Unit";
export function parseNumber(source: string): NumberWithUnit {
    const numberPattern = /^-?\d*\.?\d+/;
    const match = source.match(numberPattern);
    if (match) {
        const numberPart = match[0];
        const stringPart = source.slice(numberPart.length);
        return {
            value: parseFloat(numberPart),
            unit: readUnit(stringPart)
        };
    } else {
        return {
            value: NaN,
            unit: null
        };
    }
};
export function parseRatio(source: string, ...char: string[]): [string, string] | null {
    let result: [string, string] | null = null;
    char.forEach(e => {
        if (source.includes(e)) {
            let temp = source.split(e);
            result = [temp[0], temp[1]];
        };
    });
    if (result) { return result; };
    return null;
};
export function parseUnitType(source: string): Unit | null {
    if (readUnitByBackName(source)) { return readUnitByBackName(source); };
    let ratio = parseRatio(source, "/", "\\");
    if (ratio) {
        let res = readUnitByBackName(ratio[0] + "/" + ratio[1]);
        if (res) { return res; };
    };
    return null;
};