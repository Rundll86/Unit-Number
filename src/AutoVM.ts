import { exposeToMainWorld } from "./Common";
import { PresetVM, ValueType } from "./DataStruct";
import { createUnit, readUnit } from "./Unit";
var AutoVM: PresetVM = {
    time: createUnit(["h", "m", "s"], ValueType.NUMBER, 60),
    distance: createUnit(["km", "hm", "tm", "m", "dm", "cm", "mm", "um", "nm"], ValueType.NUMBER, 10),
    velocity: createUnit("auto", ValueType.RATIO, {
        parent: readUnit("time"),
        child: readUnit("velocity")
    })
};;
exposeToMainWorld(AutoVM, "AutoVM");