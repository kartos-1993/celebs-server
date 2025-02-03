import { Router } from "express";
import { authController } from "./auth.modules";
import { firebaseAuthMiddleware } from "../middleware/firebase.middleware";

const authRoutes = Router();

authRoutes.post("/register", firebaseAuthMiddleware, authController.register);

export default authRoutes;
