import { Router } from "express"
import { registerUser, loginUser } from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js"
import { registrationValidator, loginValidator } from "../validators/register.validators.js"

const authRouter = Router()

authRouter.route("/register").post(registrationValidator(), validate, registerUser)
authRouter.route("/login").post(loginValidator(), validate, loginUser)

export default authRouter