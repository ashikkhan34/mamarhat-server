
import express from 'express'
import { authLoginController, logoutController } from './auth.controller.js'

const router = express.Router()

router.post('/login',authLoginController)
router.post("/logout", logoutController);

export const authRouter = router;