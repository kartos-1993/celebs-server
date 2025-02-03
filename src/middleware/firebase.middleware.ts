import { NextFunction, Request, Response } from "express";
import { firebaseAuth } from "../config/firebase-auth";
import { FirebaseAppError } from "../common/utils/AppError";
import { FirebaseErrorCode } from "../common/enums/error-code.enum";
import { HTTPSTATUS } from "../config/http.config";

export const firebaseAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next(
      new FirebaseAppError(
        "No token provided",
        HTTPSTATUS.UNAUTHORIZED,
        FirebaseErrorCode.UNAUTHORIZED
      )
    );
  }

  const token =
    typeof req.headers.authorization === "string"
      ? req.headers.authorization.split(" ")[1]
      : "";

  try {
    // Verify the token
    const decodedToken = await firebaseAuth.verifyIdToken(token);

    // Attach the user data to the request object
    req.user = decodedToken;

    next();
  } catch (error: any) {
    if (error.code === "auth/id-token-expired") {
      return next(
        new FirebaseAppError(
          "Token has expired",
          HTTPSTATUS.UNAUTHORIZED,
          FirebaseErrorCode.TOKEN_EXPIRED
        )
      );
    }

    if (error.code === "auth/argument-error") {
      return next(
        new FirebaseAppError(
          "Invalid token format",
          HTTPSTATUS.BAD_REQUEST,
          FirebaseErrorCode.INVALID_TOKEN
        )
      );
    }

    return next(
      new FirebaseAppError(
        "Failed to authenticate token",
        HTTPSTATUS.INTERNAL_SERVER_ERROR,
        FirebaseErrorCode.INTERNAL_ERROR
      )
    );
  }
};
