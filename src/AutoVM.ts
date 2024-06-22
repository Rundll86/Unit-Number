import { exposeToMainWorld } from "./Common";
import { ValueType } from "./DataStruct";
import { createUnit, readUnit } from "./Unit";
export const AutoVM = exposeToMainWorld({
    time: createUnit(["h", "m", "s"], ValueType.NUMBER, 60),
    distance: createUnit(["km", "hm", "tm", "m", "dm", "cm", "mm", "um", "nm"], ValueType.NUMBER, 10),
    velocity: createUnit("auto", ValueType.RATIO, {
        parent: readUnit("time"),
        child: readUnit("velocity")
    })
}, "AutoVM");