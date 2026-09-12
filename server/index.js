import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import dns from "dns"
import authRoutes from "./routes/auth.js"

dotenv.config()
dns.setServers(["1.1.1.1", "8.8.8.8"]);




const app = express()
app.use(cors({
    origin: "*"
}))
app.use("/api/auth", authRoutes)
app.use(express.json())


mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error)
    })


const PORT = process.env.PORT || 5080
app.listen(PORT, () => {
    console.log("Server connected sucessfully")
})