import { Request, Response } from "express";

import { AuthService } from "./auth.service";

import {
  NotFoundException,
  UnauthorizedException,
} from "../common/utils/catch-errors";
import { HTTPSTATUS } from "../config/http.config";
import { asyncHandler } from "../middleware/asyncHandler";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public register = asyncHandler(
    async (req: Request, res: Response): Promise<any> => {
      const { user } = await this.authService.register(req.body);
      return res.status(HTTPSTATUS.CREATED).json({
        message: "User registered successfully",
        data: user,
      });
    }
  );
}
0;
