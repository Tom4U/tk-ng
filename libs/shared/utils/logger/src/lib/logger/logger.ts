export abstract class Logger {
  abstract info(message: string, ...args: any[]);
  abstract debug(message: string, ...args: any[]);
  abstract warn(message: string, ...args: any[]);
  abstract error(message: string, ...args: any[]);
  abstract log(message: string, ...args: any[]);
  abstract startGroup(title: string);
  abstract endGroup();
}
