import { NumberWithUnit } from "./DataStruct";
import { readUnit } from "./Unit";
export function parseUnitName(source: string): NumberWithUnit {
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
        throw new Error("invalid unit number");
    }
};