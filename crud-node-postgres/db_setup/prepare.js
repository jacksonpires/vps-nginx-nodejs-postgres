'use strict';

var pg = require('pg');
var database = require('../server/config/database.js');
var conString = database.conString;

var client = new pg.Client(conString);
client.connect();

client.query("CREATE TABLE todos(id serial not null primary key, text name, done boolean)");
client.query("INSERT INTO todos(text, done) values('Hi!',true)");
client.query("INSERT INTO todos(text, done) values('Hello!', false)");

var query = client.query("SELECT * FROM todos");

query.on('row', function(row) {
    console.log(row);
});

console.log('DB Done!');

query.on('end', function() {
    client.end();
});
