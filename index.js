const express = require('express')
const app = express()
app.get("/login", (req,res) => {
    res.end("hello from express")
    res.set({
        "content-type" : "text/plain",
        "token" : "abjhbj"
    })
})

app.listen(3004,() => console.log('server has been started'))