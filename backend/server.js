import app from './app.js';
import { connectDB } from "./db/connect.db.js"
import { User } from "./models/user.models.js"

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on http://localhost:${process.env.PORT}`)
        })
    })