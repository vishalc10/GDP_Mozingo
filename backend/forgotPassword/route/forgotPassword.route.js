const express = require('express')
const router = express.Router()
const forgotPasswordController = require("../controller/forgotPassword.controller")

router.get('/', forgotPasswordController.goToForgotPassword)
router.get('/Confirmation', forgotPasswordController.goToPasswordConfirmation)

module.exports = router