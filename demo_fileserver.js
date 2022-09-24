var http = require('http');
var url = require('url');
var fs = require('fs');
/////////////////////////////////////////////////
//Servidor que direciona para estas páginas HTML:
//http://localhost:8081/winter.html (ou summer.html)
//http://192.168.1.111:8081/winter.html (servidor ubuntu cave)
//http://192.168.1.111:8081/summer.html (servidor ubuntu cave)
/////////////////////////////////////////////////

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8081);