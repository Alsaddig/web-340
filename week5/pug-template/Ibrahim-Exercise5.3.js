var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");
//route
app.get("/", function(request, response) {

    response.render("index", {

        message: "Welcome to my Pug based homepage!"

    });

});

//create
http.createServer(app).listen(8000, function() {

    console.log("Application started on port 8000!");

});

