/*
;=============================================================
; Title:  Exercise  2.2
; Author: Alsaddig Ibrahim
; Date:   8/ 16/ 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 2.2"));
var express = require("express");

var http = require("http");

var app = express();

app.use(function(request, response) {

   console.log("In comes a request to: " + request.url);

   response.end("Hello World");

});

http.createServer(app).listen(8080);