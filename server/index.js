import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

dotenv.config()

const app = express()

// Database Connection
connectDb()

// Middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://aichatbot-nine-eta.vercel.app"
    ],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)

// Test Route
app.get("/", (req, res) => {
    res.send("API Running Successfully")
})

// Export App For Vercel
export default app