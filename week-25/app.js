

//Async Operation
// fs.readFile('input.txt', {encoding: 'UTF8'}, function(err, data) {
//     if(err) {
//         console.log("Error occured ", err);
//     }
//     console.log("Async read : ", data);
// });

// console.log("After Async Operation.");

//Sync Operation

// const data = fs.readFileSync('input.txt', {encoding: "utf8"});

// console.log("Sync read : ", data);

// console.log("Program ended.");
const fs = require("fs");
let buf = new Buffer(1024);

fs.open('input.txt', 'r+', function(err, data) {
    if(err) {
        console.log(err);
    }
    console.log("File is opened successfully.");
    fs.writeFile('input.txt', "This is a new data.", function(err) {
        if(err) {
            console.log(err);
        }
        fs.read(data, buf, 0, buf.length, 0, function(err, bytes) {
            if(err) {
                console.log(err);
            }
            console.log(bytes);
    
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
        })
    })
});