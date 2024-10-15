<<<<<<< HEAD
const express = require('express')
const app = express()
app.use(express.json())

const cre = require('./routers/credentialRoute')
app.use(cre)

=======
const express = require('express')
const app = express()
app.use(express.json())

const cre = require('./routers/credentialRoute')
app.use(cre)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001, () => console.log("Sever started"))