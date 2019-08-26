var express = require('express');

var http = require('http');

var path = require('path');

var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('div'));

app.get('/', function(request, response) {

    response.render('index', {

        message: 'home page'

    });

});

app.get('/about', function(request, response) {

    response.render('about', {

        message: 'about page'

    });

});

app.get('/contact', function(request, response) {

    response.render('contact', {

        message: 'contact page'

    });

});

app.get('/products', function(request, response) {

   response.render('products', {

       message: 'products page'

   });

});

app.use(function (request, response) {
    response.statusCode = 404;
    response.end('404!\n');
  });
  
http.createServer(app).listen(3002, function() {

   console.log('Application started on port %s',3002);

});