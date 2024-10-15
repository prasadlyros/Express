const express = require('express')
const app = express()
app.use(express.json())

const cre = require('./routers/credentialRoute')
app.use(cre)

app.listen(3001, () => console.log("Sever started"))