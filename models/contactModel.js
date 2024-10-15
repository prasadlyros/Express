<<<<<<< HEAD
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/mongtest"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const contactModel = mongoose.model("contacts",{
    cname : {
        type : String,
        required: true
    },
    cno:{
        type:Number,
        required:true,
        unique:true
    },
    cemail:{
        type:String,
        required:true,
        unique:true
    },
    caddress:{
        type:String,
    },
    ctech:{
        type:Object
    }
})

=======
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/mongtest"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const contactModel = mongoose.model("contacts",{
    cname : {
        type : String,
        required: true
    },
    cno:{
        type:Number,
        required:true,
        unique:true
    },
    cemail:{
        type:String,
        required:true,
        unique:true
    },
    caddress:{
        type:String,
    },
    ctech:{
        type:Object
    }
})

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
module.exports = contactModel