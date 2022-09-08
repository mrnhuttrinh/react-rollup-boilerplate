export enum LOG_STORAGE_KEY {
  clientId = 'rove-client-id',
  email = 'log-email',
  userId = 'log-user-id',
  sessionId = 'rove-session',
}

export const LOG_INTERVAL = 10000; // 10 secs
export const LOG_SESSION_EXPIRE = 1000 * 60 * 30; // 30m
export const CLOCK_API_URL = 'https://rove-log.moshwithme.io/api/v1/logger/now';

export enum LOG_SERVICE_NAME {
  frontend = 'rove-wallet',
}

export enum LOG_ENV {
  production = 'prod',
  staging = 'stag',
  develop = 'dev',
}

export enum LOG_SERVERITY {
  error = 'error',
  warning = 'warning',
  critical = 'critical',
  info = 'info',
  debug = 'debug',
}

export enum CONSOLE_EVENT {
  info = 'rove-frontend-info',
  debug = 'rove-frontend-debug',
  error = 'rove-frontend-error',
}

export interface ILoggingItem {
  id: string;
  user: ILoggingUserData;
  env: LOG_ENV;
  eventName: CONSOLE_EVENT;
  data?: {
    platform: 'webapp';
  } & Record<string, any>;
  service: LOG_SERVICE_NAME;
  severity: LOG_SERVERITY;
  clientTime: number;
  tracking: boolean;
  href?: string;
}

export interface ILoggingUserData {
  clientId: string | null;
  sessionId: string | null;
  email: string | null;
  userId?: string;
}