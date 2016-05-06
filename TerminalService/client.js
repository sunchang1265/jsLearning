var http = require('http');
var querystring = require('querystring');

var data = querystring.stringify({
    "firstname": "Sam1",
    "lastname": "Wise",
    "DOB": "02-01-1990",
    "Nationality": "USA"
});

var options = {
    host: 'localhost',
    port: '8088',
    path: '/??saveData',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
}

var req = http.request(options, function (response) {
    var body = '';
    response.on('data', function (chunk) {
        //body += chunk;
        body = querystring.parse(chunk.toString())
        console.log();
    });

    response.on('end', () => {
        console.log("received: " + JSON.stringify(body));
    });
});
req.write(data);
req.end();