import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})

import { connectDB } from "./db/index.js";
import { app } from "./app.js";

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: ", process.env.PORT)
})

connectDB();