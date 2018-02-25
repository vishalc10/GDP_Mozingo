const express = require('express')
const path = require('path')
const app = express()

require("./config/database")

// view engine setup
app.set('views', path.join(__dirname, "./frontend/views"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './frontend/assets')));

app.use('/', require("./backend/user/route/user.route"))



app.listen(3000, () => console.log('Example app listening on port 3000!'))