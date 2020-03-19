const express = require("express")
const cookieParser = require("cookie-parser")
const userRouter = require('./router/user-router')
const authRouter = require("./auth/auth-router")

const server = express();
const port = 4000

server.use(express.json())
server.use(cookieParser())

server.use("/users", userRouter)
server.use("/auth", authRouter)

server.get('/', (req, res, next) => {
    res.json({
        message: "Welcome"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})


server.listen(port, () => {
    console.log(`Listening on ${port} ...`)
})