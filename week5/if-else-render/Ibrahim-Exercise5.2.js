var express = require('express');

var http = require('http');

var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

//local composer array
var composers =[
    "Bach",
    "Mozart",
    "Beethoven",
    "verdi"
];
//routes
app.get('/', function(request, response){

    //response.type("text");

    response.render("index", {

        names:composers

    });

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});