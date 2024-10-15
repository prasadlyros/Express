<<<<<<< HEAD
const express = require('express')
const app = express()
const {todos,todoDetails} = require('../controllers/todoController')

app.get("/todo",todos)
app.get("/todoDe",todoDetails)

app.listen(3000,()=> console.log("Server is started"))

=======
const express = require('express')
const app = express()
const {todos,todoDetails} = require('../controllers/todoController')

app.get("/todo",todos)
app.get("/todoDe",todoDetails)

app.listen(3000,()=> console.log("Server is started"))

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
