import { Router } from "express";

import { login, changePassword } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router()

router.post('/auth/login', login)
router.put('/auth/change-password', verifyToken, changePassword);

export default router