import { Router } from "express"
import { registerUser, loginUser } from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js"
import { registrationVaidator } from "../validators/register.validators.js"

const authRouter = Router()

authRouter.route("/register").post(registrationVaidator(), validate, registerUser)
authRouter.route("/login").post(loginUser)

export default authRouter