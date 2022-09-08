import { ModeType } from 'types';
declare class Logger {
    static mode: ModeType;
    static setLogging: () => void;
    static setDefaultFunction: () => void;
    static info: () => void;
    static error: (...rest: any) => void;
    static debug: (...rest: any) => void;
    static warn: (...rest: any) => void;
    static assert: () => void;
    static clear: () => void;
    static count: () => void;
    static countReset: () => void;
    static dir: () => void;
    static dirxml: () => void;
    static group: () => void;
    static groupCollapsed: () => void;
    static groupEnd: () => void;
    static log: (...rest: any) => void;
    static profile: () => void;
    static profileEnd: () => void;
    static trace: () => void;
}
export default Logger;
