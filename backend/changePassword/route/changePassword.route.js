const express = require('express')
const router = express.Router()
const changePasswordController = require("../controller/changePassword.controller")

router.get('/changePassword', changePasswordController.goToChangePassword)
router.get('/', changePasswordController.goToLogin)

module.exports = router