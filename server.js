var express = require("express");

var app = express();
var parserController = require('./controllers/parserController');

//fire controller
parserController(app);

//listen to port 8080
//change port to process.env.PORT for use on heroku
app.listen(process.env.PORT, function(){
console.log('Listening to default PORT')
});
