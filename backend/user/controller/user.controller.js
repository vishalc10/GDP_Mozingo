

var login = function(req, res){
    if(req.body.username == "admin" && req.body.password == "admin"){
    res.redirect("/dashboard")
    }
    else{
        res.render("login")
    }
}

module.exports.login = login