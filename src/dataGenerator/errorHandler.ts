export class ErrorHandler {
  static handleError(error: Error): void {
    // Log the error
    Logger.error(error.message, error.stack);

    // Additional error handling logic (e.g., sending error reports, retrying operations)
  }
}