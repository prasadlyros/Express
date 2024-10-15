<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const {todoDetails,getTodo,createTodo} = require('../controllers/todoControllerWithEx')

router.get("/v1/todoDetails",todoDetails)
router.get("/v1//todoDetails",getTodo)
router.post("/v1/todoDetails",createTodo)

=======
const express = require('express')
const router = express.Router()

const {todoDetails,getTodo,createTodo} = require('../controllers/todoControllerWithEx')

router.get("/v1/todoDetails",todoDetails)
router.get("/v1//todoDetails",getTodo)
router.post("/v1/todoDetails",createTodo)

>>>>>>> 6beb39ff40bcabb03a2f0c8f7331e6c3dbc881fa
module.exports = router 