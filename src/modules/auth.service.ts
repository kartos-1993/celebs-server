import jwt from "jsonwebtoken";
import { ErrorCode } from "../common/enums/error-code.enum";
import { RegisterDto } from "../common/interfaces/auth.interface";
import {
  BadRequestException,
  HttpException,
  InternalServerException,
  NotFoundException,
  UnauthorizedException,
} from "../common/utils/catch-errors";

import { config } from "../config/app.config";
import { HTTPSTATUS } from "../config/http.config";
import UserModel from "../database/model/user.model";

export class AuthService {
  public async register(registerData: RegisterDto) {
    const { email } = registerData;

    const existingUser = await UserModel.exists({
      email,
    });

    if (existingUser) {
      throw new BadRequestException(
        "User already exists with this email",
        ErrorCode.AUTH_EMAIL_ALREADY_EXISTS
      );
    }
    const newUser = await UserModel.create({
      email,
    });

    return {
      user: newUser,
    };
  }
}
