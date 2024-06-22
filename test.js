const UnitSystem = require(".");
console.log(UnitSystem.AutoVM);
const v = UnitSystem.Parser.parseNumber("1m/s");
const d = v.value.child;
const t = v.value.parent;
console.log(v, d, t);