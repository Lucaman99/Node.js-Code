var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	res.render('indexjs', {variable: "Variable"})
})

var server = app.listen(8089, function () {
	console.log("Listening...")
})
