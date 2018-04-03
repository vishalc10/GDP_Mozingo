const express = require('express')
const router = express.Router()
const userController = require("../controller/user.controller")

router.post('/login', userController.login)
router.get('/test', userController.login)
router.get('/forgotPassword', userController.goToForgotPassword)
router.get('/forgotConfirmation', userController.goToPasswordConfirmation)

module.exports = router