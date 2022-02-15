// console.log("Hey Guy ! I am a hot reload.");
// console.log("Hey Guy ! I am a soft reload.");
// console.log("Hey Guy ! I am a soft reload.");
// console.log("Hey Guy ! I am a soft reload abchdakjsdl.");


// let buffer = Buffer.alloc(5); 

// buffer[0] = 1;
// buffer[1] = "Hey Guys!";
// console.log(buffer);

// const buffer = new Buffer([1, 2, 4, 10, 12]);

// console.log(buffer);

// const bufferString = new Buffer("Hey Guys ! This is string buffer.", "ascii");

// console.log(bufferString);

// const fs = require("fs");

// let dataStream = "";

// const readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF8');

// // console.log(readerStream);

// readerStream.on('data', function(chunk) {
//     dataStream = dataStream + chunk;
//     // console.log(chunk);
// });

// readerStream.on('end', function() {
//     console.log(dataStream);
// });

// readerStream.on('error', function(err) {
//     console.log(err);
// });

// const fs = require('fs');

// let data = "Class is super silent."

// const writerStream = fs.createWriteStream('output1.txt');

// writerStream.write(data, 'UTF8');

// writerStream.end();

// writerStream.on('finish', function() {
//     console.log("Write is complete.");
// });

// writerStream.on('error', function(err) {
//     console.log(err);
// });

// setInterval(() => {
//     console.log("Hey!")
// }, 1000);

// let xyz = setTimeout(() => {
//     console.log("Hey!")
// }, 2000);
// console.log("---------------------");
// clearTimeout(xyz);