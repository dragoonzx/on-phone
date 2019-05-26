var express = require('express')
var http = require('http')

var app = express()

var port = 8080
var httpServer = http.createServer(app)

app.use(express.static(__dirname + '/client/build'))

app.get('/client', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html')
})

httpServer.listen(port, () => console.log('server is listening'))
