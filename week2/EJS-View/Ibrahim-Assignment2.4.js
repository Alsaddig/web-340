var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(req, res) {

   res.render("index", {

    title: 'Assignment 2.4',
    pageTitle: 'EJS view engine',
    message: 'Welcome to the homepage!\n'

   });

});
// Respond to a call to the  page
app.get('/about', function(req, res) {
    res.render('index', {
      title: 'Assignment 2.4',
      pageTitle: 'EJS view engine',
      message: 'Welcome to the about page!\n'
    });
  });
  
  // Respond to a call to the  page
  app.get('/contact', function(req, res) {
    res.render('index', {
      title: 'Assignment 2.4',
      pageTitle: 'EJS view engine',
      message: 'Welcome to the contact Us page!\n'
    });
  });
  
app.use(function(req, res) {

    res.statusCode = 404;

    res.end("404!");

});
http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});