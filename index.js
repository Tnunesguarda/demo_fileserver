var http = require('http');

const porta = 8081;

http.createServer(function(req, res){
    
    res.end("Olá");
}).listen(porta);


console.log("Servidor http na porta: "+ porta);