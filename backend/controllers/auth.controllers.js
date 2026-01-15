import { User } from "../models/user.models.js"
import { asyncHandler } from "../utils/async-handler.js"
import { APIResponse } from "../utils/api-response.js"
import { APIError } from "../utils/api-errors.js"

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body 

    const user = await User.create({
        username: username,
        email: email,
        password: password
    })

    try{
        await user.save()
        res
            .status(200)
            .json(new APIResponse(
                200,
                {
                    user: user
                },
                "User created succesfully"
            ))
    } catch(err) {
        console.log(err)
        throw new APIError(500, "There was a error creating user")
    }
})

export { registerUser }