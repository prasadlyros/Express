<<<<<<< HEAD
const mongoose = require('mongoose')
const validator = require('validator')
const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/dummyOne?retryWrites=true&w=majority&appName=Cluster0"
const connect = mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const credentialsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username it is require feild"]
    },
    password:{
        type:String,
        required  : true,
        validate:{
            validator : function(value){
                return validator.isAscii(value)
            },
            message:"password validation failed, it should alpha numeric"
        }
    }
})

const credentialModel = mongoose.model("credentials",credentialsSchema)

module.exports = {
    credentialModel
=======
const mongoose = require('mongoose')
const validator = require('validator')
const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/dummyOne?retryWrites=true&w=majority&appName=Cluster0"
const connect = mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const credentialsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username it is require feild"]
    },
    password:{
        type:String,
        required  : true,
        validate:{
            validator : function(value){
                return validator.isAscii(value)
            },
            message:"password validation failed, it should alpha numeric"
        }
    }
})

const credentialModel = mongoose.model("credentials",credentialsSchema)

module.exports = {
    credentialModel
>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
}