

var login = function(req, res){
    if(req.body.username == "admin" && req.body.password == "admin"){
    res.redirect("/dashboard")
    }
    if(req.body.username == "ashley" && req.body.password == "ashley"){
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
    
    res.render("forgotConfirmation",{name : req.query.username})
}

module.exports.goToPasswordConfirmation = goToPasswordConfirmation

var goToChangePassword = function(req, res){
    res.render("changePassword")
}

module.exports.goToChangePassword = goToChangePassword

var goToPasswordChangeSuccess = function(req, res){
    res.render("passwordChangeSuccessful")
}

module.exports.goToPasswordChangeSuccess = goToPasswordChangeSuccess