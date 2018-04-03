const express = require('express')
const router = express.Router()
const forgotPasswordController = require("../controller/forgotPassword.controller")

router.get('/forgotPassword', forgotPasswordController.goToForgotPassword)
router.get('/', forgotPasswordController.goToLogin)
router.get('/forgotPasswordConfirmation', forgotPasswordController.goToPasswordConfirmation)

module.exports = router