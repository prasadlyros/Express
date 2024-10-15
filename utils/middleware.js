<<<<<<< HEAD
const simpleMw = (req,res,next) => {
    console.log("middleware is one")
    next()
} 

const authorize = (req,res,next) => {
    console.log("authorize")
    console.log(req.body)
}

module.exports = {
    simpleMw,authorize
=======
const simpleMw = (req,res,next) => {
    console.log("middleware is one")
    next()
} 

const authorize = (req,res,next) => {
    console.log("authorize")
    console.log(req.body)
}

module.exports = {
    simpleMw,authorize
>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
}