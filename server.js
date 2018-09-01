var express = require('express')
var app = express()
var fs = require('fs')

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	  res.sendFile('./index.html');
});

app.listen(3000, "0.0.0.0")
