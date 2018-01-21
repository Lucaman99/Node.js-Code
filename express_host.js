var express = require('express');
var fs = require('fs')
var url = require('url')
var app = express();
var mysql = require('mysql')


var con = mysql.createConnection({host:"localhost", user:"root", password:"Password", database:"Database"})

con.connect(function(err){
   	if (err) throw err;
   })

app.post('/*', function (req, res) {
	console.log("hbgfdsdf")
   var x = String(url.parse(req.url).query).substring(2)
   res.send("Success")
   var sql = "INSERT INTO test (value1, value2) VALUES ('7', '"+x+"')"
   con.query(sql, function(err, data){
   	if (err) throw err;
   })
})

var server = app.listen(8085, function () {
   
   console.log("Listening...")
})
