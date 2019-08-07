/*
;=============================================================
; Title:  Exercise 2.3
; Author: Alsaddig Ibrahim
; Date:   9 June 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/
//header
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Week1 Exercise 1.3"));
   
//start code
console.log("");
var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
//end code

