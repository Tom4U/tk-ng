import { LogLevel } from './log-level.enum';
import { Logger } from './logger';

// tslint:disable:no-console
export class ConsoleLogger implements Logger {
  constructor(private logLevel: LogLevel) {}

  info(message: string, ...args: any[]) {
    if (this.logLevel > LogLevel.INFO) {
      return;
    }

    const formattedMessage = `[INFO] ${message}`;

    if (console.hasOwnProperty('info')) {
      console.info(formattedMessage, args);
    } else {
      console.log(formattedMessage, args);
    }
  }
  debug(message: string, ...args: any[]) {
    if (this.logLevel > LogLevel.DEBUG) {
      return;
    }

    const formattedMessage = `[DEBUG] ${message}`;

    if (console.hasOwnProperty('debug')) {
      console.debug(formattedMessage, args);
    } else {
      console.log(formattedMessage, args);
    }
  }
  warn(message: string, ...args: any[]) {
    if (this.logLevel > LogLevel.WARN) {
      return;
    }

    const formattedMessage = `[WARN] ${message}`;

    if (console.hasOwnProperty('warn')) {
      console.warn(formattedMessage, args);
    } else {
      console.log(formattedMessage, args);
    }
  }
  error(message: string, ...args: any[]) {
    if (this.logLevel > LogLevel.ERROR) {
      return;
    }

    const formattedMessage = `[ERROR] ${message}`;

    if (console.hasOwnProperty('error')) {
      console.error(formattedMessage, args);
    } else {
      console.log(formattedMessage, args);
    }
  }
  log(message: string, ...args: any[]) {
    console.log(message, args);
  }
  startGroup(title: string) {
    if (console.hasOwnProperty('groupCollapsed')) {
      console.groupCollapsed(title);
    } else if (console.hasOwnProperty('group')) {
      console.group(title);
    } else {
      console.log(`####### ${title} #######`);
    }
  }
  endGroup() {
    if (console.hasOwnProperty('groupEnd')) {
      console.groupEnd();
    } else {
      console.log('############################');
    }
  }
}
