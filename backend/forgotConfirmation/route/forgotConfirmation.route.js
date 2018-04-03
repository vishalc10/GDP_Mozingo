const express = require('express')
const router = express.Router()
const forgotConfirmationController = require("../controller/forgotConfirmation.controller")

router.get('/forgotConfirmation', forgotConfirmationController.goToForgotConfirmation)
router.get('/', forgotConfirmationController.goToLogin)

module.exports = router