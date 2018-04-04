var goToDashboard = function(req, res){
    res.render("dashboard")
}

module.exports.goToDashboard = goToDashboard

var goToLogin = function(req, res){
    res.render("login")
}

module.exports.goToLogin = goToLogin

var goToAdminPanel = function(req, res){
    res.render("adminPanel")
}

module.exports.goToAdminPanel = goToAdminPanel

var goToAddUser = function(req, res){
    res.render("addUser")
}

module.exports.goToAddUser = goToAddUser
