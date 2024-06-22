import { AnyObject, PresetVM } from "./DataStruct";
export function getGlobalNamespace(): AnyObject<any> {
    return globalThis as AnyObject<any>;
};
export function getGlobalVar<T = AnyObject>(name: string): T {
    return getGlobalNamespace()[name] as T;
};
export function exposeToMainWorld<T extends {}>(data: T, name: string): T {
    getGlobalNamespace()[name] = data;
    return data;
};
export function getAutoVM(): PresetVM {
    return getGlobalVar("AutoVM");
};