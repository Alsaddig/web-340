var express = require("express");

var http = require("http");

var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var Employee = require("./models/employee");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});
function list(request, response) {  

    var customers = pjs.query("SELECT customerName FROM customers");
    
    response.render("list.ejs", { customers });
  
  }
// mLab connection
var mongoDB = "<mLab connection string>";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});
// model

var employee = new Employee({

  name: "Alsaddig",
  name:"Ibrahim"

});
/* app.get('/li',(req, res) => {
    res.render("employee/addOrEdit");
      });
    
      app.post('/',(req, res) => {
    insertRecord(req, res);
      });
function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
  if (!err)
    res.redirect('employee/list');
  else {
      console.log('Error during record insertions : ' + err);
        }
    });
}

app.get('/list', (req, res) => {
    Employee.find((err, docs) => {
  if (!err) {
      res.render("employee/list", {
          list: docs
      });
  } else {
      console.log('Error in retrieving employee list :' + err);
  }
});
}); */

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});