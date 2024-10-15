<<<<<<< HEAD
const express = require('express')
const app = express()
const {todoDetails,todos,putTodo,patchTodo,deleteTodo,todoParams} = require('../controllers/todoController')
app.use(express.json())

app.get('/v1/todoDetails',todoDetails)
app.get('/v1/todo/:title/:completed?',todoParams)

//PUT
app.put('/v1/todo',putTodo)

//PATCH
app.patch('/v1/todo',patchTodo)

//Delete
app.delete('v1/todo',deleteTodo)

=======
const express = require('express')
const app = express()
const {todoDetails,todos,putTodo,patchTodo,deleteTodo,todoParams} = require('../controllers/todoController')
app.use(express.json())

app.get('/v1/todoDetails',todoDetails)
app.get('/v1/todo/:title/:completed?',todoParams)

//PUT
app.put('/v1/todo',putTodo)

//PATCH
app.patch('/v1/todo',patchTodo)

//Delete
app.delete('v1/todo',deleteTodo)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001, () => console.log("Server started"))