/*
============================================
; Title:  arrays.js
; Author: Alsaddig Ibrahim
; Date:   september  21 2019
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Assignment 7.4"));

// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the EmployeeSchema

var EmployeeSchema = new Schema({

   name: String,
    name:String

});
// define the Employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the Employee to calling files

module.exports = Employee;
//end code
