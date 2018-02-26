var goToDashboard = function(req, res){
    res.render("dashboard")
}

module.exports.goToDashboard = goToDashboard

var goToLogin = function(req, res){
    res.render("login")
}

module.exports.goToLogin = goToLogin
