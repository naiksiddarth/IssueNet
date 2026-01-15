import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required:true
    }
})

userSchema.pre("save", async function () {
    if(!this.isModified("password")) return
    this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model("User", userSchema)

export {User}