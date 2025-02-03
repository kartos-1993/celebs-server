import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

declare global {
  namespace Express {
    interface User extends UserDocument {}
    interface Request {
      sessionId?: string;
      user?: DecodedIdToken;
    }
  }
}
