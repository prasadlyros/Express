<<<<<<< HEAD
const express=require("express")
// let data=require("./data/user")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
// const contactsRoute=require("./routes/contactManagerRoutes")
// app.use(contactsRoute)
const contactRouter=require("./routers/contactRouter")
// const { contactDetails } = require("./controllers/contactControllers")
app.use(contactRouter)

=======
const express=require("express")
// let data=require("./data/user")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
// const contactsRoute=require("./routes/contactManagerRoutes")
// app.use(contactsRoute)
const contactRouter=require("./routers/contactRouter")
// const { contactDetails } = require("./controllers/contactControllers")
app.use(contactRouter)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
app.listen(3001,()=>console.log("server has started"))