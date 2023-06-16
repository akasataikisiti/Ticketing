import { CustomeError } from "./custom-error";

export class NotAuthorizedError extends CustomeError {
  statusCode = 401;

  constructor() {
    super("Not authorized");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not authorized" }];
  }
}
