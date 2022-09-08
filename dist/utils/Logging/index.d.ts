import { ILoggingUserData, CONSOLE_EVENT } from './types';
declare class LoggingService {
    private static inst?;
    private _queueBeforeInit;
    private queue;
    private processingLogs;
    userData?: ILoggingUserData;
    mode?: string;
    constructor();
    static get instance(): LoggingService;
    private handleTempQueue;
    init: () => Promise<void>;
    private handleBeforeUnload;
    info: (eventName: CONSOLE_EVENT, data?: Record<string, any>) => void;
    debug: (eventName: CONSOLE_EVENT, data?: Record<string, any>) => void;
    error: (eventName: CONSOLE_EVENT, data?: Record<string, any>) => void;
    log: (eventName: CONSOLE_EVENT, data?: Record<string, any>) => void;
    private handleQueue;
    private getQueryStringData;
    private pushToQueue;
    private getLogEnvFromConfig;
    private logEmail;
    private initClientId;
    private initSessionId;
}
export default LoggingService;
