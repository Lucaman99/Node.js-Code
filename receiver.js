var express = require('express')
var app = express()
var url = require('url')
var server = require('http')
var fs = require('fs')
var mysql = require('mysql')

var con = mysql.createConnection({host: 'localhost', user: 'root', password: 'Password', database: "Database"})

app.set('view engine', 'ejs')

con.connect(function (err){
	if (err) throw err;
})

var arr = []

function one() {

	var sql = "SELECT * FROM test"
   con.query(sql, function(err, data){
   	if (err) throw err;

   	arr.push(decodeURI(data[data.length - 1].value2))

   	app.get('/', function (req, res) {
	res.render('indexjs', {variable: arr})
})

var http = app.listen(8089, function () {
	console.log("Listening...")
})


   	console.log(decodeURI(data[data.length - 1].value2))
   	var base = data.length

   	function send() {
	var sql = "SELECT * FROM test"
   con.query(sql, function(err, data){
   	if (err) throw err;
   	if (base !== data.length) {
   		console.log("New transmission")
   		http.close()
   		one()
   	}
   	else {
   		setTimeout(send, 1000)
   	}
   })

}
send()

   })

}
one()
