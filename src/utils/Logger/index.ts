import { ModeType } from 'types';
import LoggingService from 'utils/Logging';
import { CONSOLE_EVENT } from 'utils/Logging/types';

class Logger {
  public static mode: ModeType = 'develop';

  public static setLogging = (): void => {
    LoggingService.instance.mode = Logger.mode;
    LoggingService.instance.init();
  };

  public static setDefaultFunction = (): void => {
    Logger.info = console.info;
    Logger.error = console.error;
    Logger.debug = console.debug;
    Logger.warn = console.warn;
    Logger.assert = console.assert;
    Logger.clear = console.clear;
    Logger.count = console.count;
    Logger.countReset = console.countReset;
    Logger.dir = console.dir;
    Logger.dirxml = console.dirxml;
    Logger.group = console.group;
    Logger.groupCollapsed = console.groupCollapsed;
    Logger.log = console.log;
    Logger.profile = console.profile;
    Logger.profileEnd = console.profileEnd;
    Logger.trace = console.trace;
  };

  public static info = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static error = (...rest: any): void => {
    if (this.mode === 'production') {
      // TODO for production
      LoggingService.instance.error(CONSOLE_EVENT.error, {
        name: typeof rest[0] === 'string' ? rest[0] : 'ERROR',
        error: { ...rest },
      });
      console.error(...rest);
    }
  };

  public static debug = (...rest: any): void => {
    if (this.mode === 'production') {
      // TODO for production
      LoggingService.instance.debug(CONSOLE_EVENT.debug, {
        name: typeof rest[0] === 'string' ? rest[0] : 'DEBUG',
        debug: { ...rest },
      });
      console.debug(...rest);
    }
  };

  public static warn = (...rest: any): void => {
    if (this.mode === 'production') {
      // TODO for production
      console.warn(...rest);
    }
  };

  public static assert = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static clear = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static count = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static countReset = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static dir = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static dirxml = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static group = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static groupCollapsed = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static groupEnd = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static log = (...rest: any): void => {
    if (this.mode === 'production') {
      LoggingService.instance.debug(CONSOLE_EVENT.debug, {
        name: typeof rest[0] === 'string' ? rest[0] : 'LOG',
        debug: { ...rest },
      });
      console.log(...rest);
    }
  };

  public static profile = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static profileEnd = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };

  public static trace = (): void => {
    if (this.mode === 'production') {
      // TODO for production
    }
  };
}

export default Logger;
