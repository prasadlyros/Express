<<<<<<< HEAD
const express = require('express')
const app = express()

const {authorize} = require('./utils/middleware')

app.use(express.json)
app.use(authorize)

app.post("/login",(req,res) => {
    res.send('post request')
})

=======
const express = require('express')
const app = express()

const {authorize} = require('./utils/middleware')

app.use(express.json)
app.use(authorize)

app.post("/login",(req,res) => {
    res.send('post request')
})

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001, () => console.log("server is started"))