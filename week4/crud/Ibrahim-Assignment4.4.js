var express = require("express");

var http = require("http");

var app = express();


app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.\n");
  });
  
 
  app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.\n");
  });
  
  
  app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request.\n");
  });
  
  
  app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request.\n");
  });
  
 
  app.use(function (request, response) {
    response.statusCode = 404;
    response.end('404!\n');
  });
  
  http.createServer(app).listen(3000, function () {
    console.log('Application started on port %s ',3000);
  });