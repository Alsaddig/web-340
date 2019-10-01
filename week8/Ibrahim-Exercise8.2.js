/*
;=============================================================
; Title:  Exercise 1.4
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 8.2"));
// 
// Require Statments
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet");
var path = require("path");
var app = express();

// Use Statements
app.set("views", path.resolve(_dirname, "views"));
app.set("view engine", "ejs");

//http call
app.get("/", function (req, res){
    Response.render("index", {
        message: "XSS Prevention"
    });
});

// Create and Listen
http.createServer(app).listen(8080, function(){
    console.log("Application starte and listening on port 8080!")
});

//end program