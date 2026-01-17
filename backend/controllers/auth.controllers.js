import { User } from "../models/user.models.js"
import { asyncHandler } from "../utils/async-handler.js"
import { APIResponse } from "../utils/api-response.js"
import { APIError } from "../utils/api-errors.js"

const generateAccessAndRefreshToken = async function (userId) {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save()
        return { accessToken, refreshToken }
    } catch (error) {
        APIError(500, "Something went wrong while generating access and refresh token")
    }
}

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
    if(user.checkPassword(password)){
        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new APIResponse(
            200,
            {
                user: user,
                accessToken: accessToken,
                refreshToken: refreshToken
            },
                "Login succesful"
            ))
    } else {
        throw new APIError(401, "Password Incorrect")
    }
})


export { registerUser, loginUser}