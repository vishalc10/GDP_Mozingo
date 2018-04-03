

var login = function(req, res){
    if(req.body.username == "admin" && req.body.password == "admin"){
    res.redirect("/dashboard")
    }
    else{
        res.render("login")
    }
}

module.exports.login = login

var goToForgotPassword = function(req, res){
    res.render("forgotPassword")
}

module.exports.goToForgotPassword = goToForgotPassword


var goToPasswordConfirmation = function(req,res){
    res.render("forgotConfirmation")
}

module.exports.goToPasswordConfirmation = goToPasswordConfirmation

var goToChangePassword = function(req, res){
    res.render("changePassword")
}

module.exports.goToChangePassword = goToChangePassword