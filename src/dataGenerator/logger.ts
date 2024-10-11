export class Logger {
  static log(message: string): void {
    console.log(`[INFO] ${message}`);
  }

  static error(message: string, stack?: string): void {
    console.error(`[ERROR] ${message}`);
    if (stack) {
      console.error(stack);
    }
  }
}