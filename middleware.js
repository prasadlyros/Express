<<<<<<< HEAD
const express = require('express')
const app = express()

const {simpleMw} = require("./utils/middleware")

app.use(simpleMw)

app.get("/user",(req,res,next) => {
    console.log("middleware is two")
    next()
},(req,res) => {
    console.log("/user is hit")
    res.send('user')
})

app.get("/todo",simpleMw,(req,res) => {
    console.log("/todo is hit")
    res.send('todo')
})

=======
const express = require('express')
const app = express()

const {simpleMw} = require("./utils/middleware")

app.use(simpleMw)

app.get("/user",(req,res,next) => {
    console.log("middleware is two")
    next()
},(req,res) => {
    console.log("/user is hit")
    res.send('user')
})

app.get("/todo",simpleMw,(req,res) => {
    console.log("/todo is hit")
    res.send('todo')
})

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001,()=> console.log("Server started"))