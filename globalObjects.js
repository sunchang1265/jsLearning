function printData() {
    console.log(__filename);
    console.log(__dirname);
}

var count = 1;

setTimeout(printData, 5000);

setInterval(()=>{console.log(count++)}, 1000);