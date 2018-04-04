const express = require('express')
const router = express.Router()
const dashboardController = require("../controller/dashboard.controller")

router.get('/dashboard', dashboardController.goToDashboard)
router.get('/', dashboardController.goToLogin)
router.get('/dashboard/adminPanel', dashboardController.goToAdminPanel)
router.get('/dashboard/addUser', dashboardController.goToAddUser)

module.exports = router