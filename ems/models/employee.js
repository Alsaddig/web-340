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

// start program

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema with first and last name
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});
// Export the model using the Schema.
module.exports = mongoose.model('Employee', EmployeeSchema);

// end program
