var HLSServer = require('hls-server')
var http = require('http')
 
var server = http.createServer()
var hls = new HLSServer(server, {
  path: '/streams',     // Base URI to output HLS streams
  dir: 'output/'  // Directory that input files are stored
})
server.listen(3000)