var http = require('http');
var fs = require('fs');
var url = require('url');
console.log("Server started!");
exports.getData = saveData;

exports.dataValidation = function () {

};

exports.sendData = function () {

};

var enrollObj = {};
http.createServer(function (request, response) {
    // console.log(request.method);
    // console.log(request.url);
    request.on('error', (err) => {
        console.log(err);
    });
    var hostName = request.headers.host;
    var pathname = url.parse(request.url).pathname;
    console.log(request.url);
    if (request.url === '/enroll') {
        console.log("before: " + enrollObj);
        request.on('data', () => {
            //response.end(JSON.stringify(enrollObj));
            response.end(enrollObj.toString());
            
        });
    } else if (request.url === '/') {
        saveData("index.html", (err, data) => {
            if (err) {
                response.writeHead(404);
                response.end(err.message);
            } else {
                response.end(data);
            }
        });
    } else if (request.url === '/save') {
        request.on('data', (enrollData) =>{
           enrollObj = enrollData;
           //response.end(enrollObj);
        });
    } else {
        response.end('Invalid request...');
    }





    response.on('error', function (err) {
        console.error(err);
    });
}).listen(8088);

function parseURL(url) {
    var parts = url.split('??');
    if (parts.length > 1)
        return parts[1];
    else
        return false;
}

function saveData(path, callback) {
    var output = [];
    fs.readFile(path, (err, data) => {
        if (err) callback(err);
        else {
            output.push(data);
            callback(null, Buffer.concat(output));
        }
    });
};