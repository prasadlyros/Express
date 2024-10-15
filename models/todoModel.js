<<<<<<< HEAD
const mongoose = require('mongoose')
// const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/"need to enter db name of out choice"?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb://localhost:27017/mongtest"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const todoModel = mongoose.model("todo",{
    title : {
        type : String,
        required: true,
        unique:true
    },
    desc : {
        type:String,
        required:true,
        unique:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
})

=======
const mongoose = require('mongoose')
// const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/"need to enter db name of out choice"?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb://localhost:27017/mongtest"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const todoModel = mongoose.model("todo",{
    title : {
        type : String,
        required: true,
        unique:true
    },
    desc : {
        type:String,
        required:true,
        unique:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
})

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
module.exports = todoModel