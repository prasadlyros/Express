<<<<<<< HEAD
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())

const todoRouter = require('./routers/todoRouter')
app.use(todoRouter)

=======
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())

const todoRouter = require('./routers/todoRouter')
app.use(todoRouter)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001,()=>console.log("server has started"))