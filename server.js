var app = require('http');
var fs = require('fs');
var index = './public/index.html';
var port = 8090;
var path = require('path');
var favicon = require('serve-favicon');

app.createServer(function(request, response){
   if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        return;
    };
    
    var file = (request.url === '/') ? index : path.join(__dirname, request.url);
    fs.readFile(file, function(error, html){
        if (error){
            response.writeHeader(500, {"Content-Type": "text/html"});  
            console.log(error.message);  
            response.write(error.message);  
            response.end();
            return;
        };
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    });

}).listen(port, function(){
    console.log('server started and listening on port: ' + port);
});