var goToForgotPassword = function(req, res){
    res.render("forgotPassword")
}

module.exports.goToForgotPassword = goToForgotPassword


var goToPasswordConfirmation = function(req,res){
    res.render("forgotConfirmation")
}

module.exports.goToPasswordConfirmation = goToPasswordConfirmation
