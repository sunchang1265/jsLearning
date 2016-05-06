var fs = require('fs');
var data = '';
var writeData = 'data to be added';

//create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writeStream = fs.createWriteStream('output.txt');

//readerStream.pipe(writeStream);



// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data',  (text) => {
    data += text;
    data += text.length;
});

readerStream.on('end',  () => {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});
/*

// Write the data to stream with encoding to be utf8
writeStream.write(data, 'UTF8');

// Handle stream events --> finish, and error
writeStream.on('finish', function (text) {
    console.log("Finished writing");
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});

*/

console.log("Program ends");