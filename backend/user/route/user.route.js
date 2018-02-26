const express = require('express')
const router = express.Router()
const userController = require("../controller/user.controller")

router.post('/login', userController.login)
router.get('/test', userController.login)

module.exports = router