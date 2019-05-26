var express = require('express')
var http = require('http')

var app = express()

var port = 8080
var httpServer = http.createServer(app)

app.use(express.static(__dirname + '/gatchina-hackathon/build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/gatchina-hackathon/build/index.html')
})

httpServer.listen(port, () => console.log('server is listening'))
