var express = require("express");
var http = require("http");
var logger=require('morgan');


var app = express();


app.use(logger('div'));


app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        firstName: "Leo",

        lastName: "Tolstoy",

        employeeId: id

    });

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000");

});