var express = require('express');

var http = require('http');

var app = express();
//routes

app.get("/", function(req, res) {

    res.end('Welcome to the homepage\n');

});

app.get('/about', function(req, res) {

    res.end('Welcome to the about page.\n');

});

app.get('/contact', function(req, res) {

    res.end('Welcome to the contact page.\n');

});

app.use(function(req, res) {

    res.statusCode = 404;

    res.end("404!");

});

http.createServer(app).listen(3000,function(){
    console.log('Application stated on port %s ',3000);
}
);