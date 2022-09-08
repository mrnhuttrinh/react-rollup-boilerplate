/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import {
  ILoggingItem,
  ILoggingUserData,
  LOG_INTERVAL,
  CONSOLE_EVENT,
  LOG_SERVERITY,
  LOG_SERVICE_NAME,
  LOG_ENV,
  LOG_STORAGE_KEY,
} from './types';

class LoggingService {
  private static inst?: LoggingService;
  private _queueBeforeInit: Omit<ILoggingItem, 'user'>[];
  private queue: ILoggingItem[];
  private processingLogs: ILoggingItem[];
  public userData?: ILoggingUserData;
  public mode?: string;

  constructor() {
    this._queueBeforeInit = [];
    this.queue = [];
    this.processingLogs = [];
  }

  public static get instance(): LoggingService {
    if (!LoggingService.inst) LoggingService.inst = new LoggingService();

    return LoggingService.inst;
  }

  private handleTempQueue = (): void => {
    if (this._queueBeforeInit.length) {
      if (this.userData) {
        this._queueBeforeInit.forEach((i) => {
          this.queue.push({
            ...i,
            user: Object(this.userData),
          });
        });
      }
      this._queueBeforeInit = [];
    }
  };

  public init = async (): Promise<void> => {
    this.userData = {
      clientId: this.initClientId(),
      sessionId: this.initSessionId(),
      email: this.logEmail(),
    };
    setInterval(() => {
      this.handleQueue();
    }, LOG_INTERVAL);
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  };

  private handleBeforeUnload = (): void => {
    this.handleQueue();
  };

  public info = (eventName: CONSOLE_EVENT, data?: Record<string, any>): void => {
    this.pushToQueue(LOG_SERVERITY.info, eventName, data, false);
  };

  public debug = (eventName: CONSOLE_EVENT, data?: Record<string, any>): void => {
    this.pushToQueue(LOG_SERVERITY.debug, eventName, data, false);
  };

  public error = (eventName: CONSOLE_EVENT, data?: Record<string, any>): void => {
    this.pushToQueue(LOG_SERVERITY.error, eventName, data, false);
  };

  public log = (eventName: CONSOLE_EVENT, data?: Record<string, any>): void => {
    this.pushToQueue(LOG_SERVERITY.debug, eventName, data, false);
  };

  private handleQueue = async (): Promise<void> => {
    this.userData = {
      clientId: this.initClientId(),
      sessionId: this.initSessionId(),
      email: this.logEmail(),
    };
    this.handleTempQueue();
    if (this.queue.length) {
      this.processingLogs = [...this.queue];
      try {
        await axios.post<ILoggingItem>(`https://rove-log.moshwithme.io/api/v1/logger/batch-send`, {
          logEntries: this.processingLogs.map((item) => ({
            user: item.user,
            env: item.env,
            eventName: item.eventName,
            data: {
              ...item.data,
              platform: 'webapp',
            },
            clientTime: new Date(item.clientTime).toISOString(),
            service: item.service,
            severity: item.severity,
            href: window.location.href,
            tracking: item.tracking,
          })),
        });

        this.queue = this.queue.filter((item) => !this.processingLogs.find((l) => l.id === item.id));
      } finally {
        this.processingLogs = [];
      }
    }
  };

  private getQueryStringData = (): ParsedQuery => {
    return qs.parse(window.location.search);
  };

  private pushToQueue = (severity: LOG_SERVERITY, eventName: CONSOLE_EVENT, data?: Record<string, any>, tracking = true): void => {
    const d = data || {};

    const query = this.getQueryStringData();
    if (this.userData?.sessionId) {
      this.queue.push({
        id: `log-${+new Date()}`,
        user: this.userData,
        env: this.getLogEnvFromConfig(),
        service: LOG_SERVICE_NAME.frontend,
        clientTime: +new Date(),
        severity,
        eventName,
        tracking,
        data: {
          platform: 'webapp',
          pageUrl: window.location.href,
          email: this.userData.email,
          ...d,
          ...query,
        },
      });
    } else {
      this._queueBeforeInit.push({
        id: `log-${+new Date()}`,
        env: this.getLogEnvFromConfig(),
        service: LOG_SERVICE_NAME.frontend,
        clientTime: +new Date(),
        severity,
        eventName,
        tracking,
        data: {
          platform: 'webapp',
          pageUrl: window.location.href,
          ...d,
          ...query,
        },
      });
    }
  };

  private getLogEnvFromConfig = (): LOG_ENV => {
    switch (this.mode) {
      case 'production':
        return LOG_ENV.production;
      case 'staging':
        return LOG_ENV.staging;
      default:
        return LOG_ENV.develop;
    }
  };

  private logEmail = (): string | null => {
    let email = localStorage.getItem(LOG_STORAGE_KEY.email);

    return email;
  };

  private initClientId = (): string | null => {
    let clientId = localStorage.getItem(LOG_STORAGE_KEY.clientId);

    return clientId;
  };

  private initSessionId = (): string | null => {
    let id = localStorage.getItem(LOG_STORAGE_KEY.sessionId);

    return id;
  };
}

export default LoggingService;
