import dotenv from "dotenv"
import app from './app.js';

dotenv.config({
    path: "./.env",
    quiet: true,
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on http://localhost:${process.env.PORT}`)
})