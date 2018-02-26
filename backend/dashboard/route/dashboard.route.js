const express = require('express')
const router = express.Router()
const dashboardController = require("../controller/dashboard.controller")

router.get('/dashboard', dashboardController.goToDashboard)
router.get('/', dashboardController.goToLogin)

module.exports = router