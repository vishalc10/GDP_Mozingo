var goToChangePassword = function(req, res){
    res.render("changePassword")
}

module.exports.goToChangePassword = goToChangePassword

var goToLogin = function(req, res){
    res.render("login")
}

module.exports.goToLogin = goToLogin
