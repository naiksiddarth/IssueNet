import { User } from "../models/user.models.js"
import { asyncHandler } from "../utils/async-handler.js"
import { APIResponse } from "../utils/api-response.js"
import { APIError } from "../utils/api-errors.js"
import bcrypt from "bcrypt"

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

const loginUser = asyncHandler( async function(req, res) {
    const { email, password } = await req.body
    const user = await User.findOne({email: email.trim()})
    if(!user) throw new APIError(401, "user not found")
    const doesPasswordMatch = await bcrypt.compare(password, user.password)
    if(doesPasswordMatch){
        res
            .status(200)
            .json(
                new APIResponse(200, user, "Login Succesful")
            )
    } else {
        throw new APIError(401, "Password Incorrect")
    }
})


export { registerUser, loginUser}