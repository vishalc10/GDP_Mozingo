// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mozingoDB');

//Error handler
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("DB connected")
});