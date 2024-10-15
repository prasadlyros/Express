<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const {contactDetails,createUser,getUser,deleteUser} = require('../controllers/contactControllerFinal')

router.get("/v1/contactDetails",contactDetails)
router.post('/v1/contactDetails',createUser)
router.get("/v1/contactDetails",getUser)
router.delete('/v1/contactDetails/:username',deleteUser)

=======
const express = require('express')
const router = express.Router()

const {contactDetails,createUser,getUser,deleteUser} = require('../controllers/contactControllerFinal')

router.get("/v1/contactDetails",contactDetails)
router.post('/v1/contactDetails',createUser)
router.get("/v1/contactDetails",getUser)
router.delete('/v1/contactDetails/:username',deleteUser)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
module.exports = router 