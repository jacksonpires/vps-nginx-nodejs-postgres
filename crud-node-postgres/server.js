/*=========================================================
Michael Cullen
Todo CRUD - Node / Express / Angular / PostgreSQL
server.js

2014

Working - (Tá se ag obair)

Ref.
http://stackoverflow.com/questions/8484404/what-is-the-proper-way-to-use-the-node-js-postgresql-module
https://gist.github.com/brianc/6908287
http://stackoverflow.com/questions/15619456/how-do-i-use-node-postgres-in-a-server

============================================================*/

'use strict';

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express  = require('express');								//Express
var logger   = require('morgan');								//logger middleware
var bodyParser = require('body-parser');						//needed to read HTTP packet content using req.body etc
var path = require('path');
var http = require('http');
var colours = require('colors');


/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
var routes = require('./server/routes.js');						//Exchange routes & DB Queries 

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express(); 

/* ========================================================== 
Set the Port the HTTP server will listen on
============================================================ */
app.set('port', process.env.PORT || 3090);							

/* ========================================================== 
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public')); 


/* ========================================================== 
Use Middleware
============================================================ */
app.use(logger('dev')); 	//log every request to the console
		
// parse application/json
app.use(bodyParser.json()) //Get info from $HTTP POST/PUT packets - needed for req.body


/* ========================================================== 
ROUTES - using Express
============================================================ */
routes(app);


/* ========================================================== 
Create HTTP Server using Express
============================================================ */
var server = http.createServer(app);

/* ========================================================== 
Bind to a port and listen for connections on it 
============================================================ */
server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' .red + app.get('port') ) ;
  console.log('Running in [' + process.env.ACTUAL_ENV + '] mode');
});

