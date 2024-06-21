import { AnyObject, PresetVM } from "./DataStruct";
export function getGlobalNamespace(): AnyObject {
    return globalThis as AnyObject<any>;
};
export function getGlobalVar<T = AnyObject>(name: string): T {
    return getGlobalNamespace()[name] as T;
};
export type IsEqual<T, U, A, B> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? A : B;
export function exposeToMainWorld(data: any, name: string): void {
    getGlobalNamespace()[name] = data;
};
export function getAutoVM(): PresetVM {
    return getGlobalVar("AutoVM");
};