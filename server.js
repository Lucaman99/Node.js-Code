var http = require('http')
var url = require('url')
var fs = require('fs')
var mysql = require('mysql')

http.createServer(function (req, res){
	var route = url.parse(req.url).pathname
	fs.readFile(route.substring(1), function (err, data){
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"})
			res.write("404 Error")
			res.end()
		}
		else {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data)
		res.end()
	}
	})
}).listen(8080)
