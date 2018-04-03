const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

require("./config/database")

//body parser
app.use(bodyParser.json({limit:1024*1024*20}));
app.use(bodyParser.urlencoded({limit:1024*1024*20,extended: false }));

// view engine setup
app.set('views', path.join(__dirname, "./frontend/views"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './frontend/assets')));

app.use('/', require("./backend/dashboard/route/dashboard.route"))
app.use('/user', require("./backend/user/route/user.route"))
app.use('/forgotPassword', require("./backend/forgotPassword/route/forgotPassword.route"))


app.listen(3000, () => console.log('Example app listening on port 3000!'))

function loginTest(jsonIn) {
    data = JSON.parse(jsonIn);
    return {
        username: data.username,
        password: data.password
    };
}