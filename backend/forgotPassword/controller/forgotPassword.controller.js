var goToForgotPassword = function(req, res){
    res.render("/forgotPassword")
}

module.exports.goToForgotPassword = goToForgotPassword

var goToLogin = function(req, res){
    res.render("login")
}

module.exports.goToLogin = goToLogin

var goToPasswordConfirmation = function(req,res){
    res.render("/forgotPasswordConfirmation")
}

module.exports.goToPasswordConfirmation = goToPasswordConfirmation
