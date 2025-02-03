import { HTTPSTATUS, HttpStatusCode } from "../../config/http.config";
import { ErrorCode, FirebaseErrorCode } from "../enums/error-code.enum";

type AllErrorCodes = ErrorCode | FirebaseErrorCode;

export class AppError extends Error {
  public statusCode: HttpStatusCode;
  public errorCode?: AllErrorCodes;
  constructor(
    message: string,
    statusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR,
    errorCode?: AllErrorCodes
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class FirebaseAppError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTPSTATUS.UNAUTHORIZED,
    errorCode: FirebaseErrorCode
  ) {
    super(message, statusCode, errorCode);
  }
}
