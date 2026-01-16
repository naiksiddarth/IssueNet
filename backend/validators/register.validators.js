import { body } from "express-validator"

export const registrationVaidator = function () {
    
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email cannot be empty")
            .isEmail()
            .withMessage("Please enter a valid email"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username cannot be empty")

    ]
    // console.log(data)
    // return data
}