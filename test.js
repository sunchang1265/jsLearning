var http = require('http');

http.createServer(function (request, response) {
    request.on('error', function (err) {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', function (err) {
        console.error(err);
    });
    if (request.method === 'GET' && request.url === '/echo') {
           var body = [];
           request.on('data', function(chunk) {
               body.push(chunk);
           }).on('end', function(){
               body = Buffer.concat(body).toString();
               response.end("data: " + body);
           });
        //request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8088);