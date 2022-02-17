

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
// const fs = require("fs");
// let buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function(err, data) {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File is opened successfully.");
//     fs.writeFile('input.txt', "This is a new data.", function(err) {
//         if(err) {
//             console.log(err);
//         }
//         fs.read(data, buf, 0, buf.length, 0, function(err, bytes) {
//             if(err) {
//                 console.log(err);
//             }
//             console.log(bytes);
    
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }
//         })
//     })
// });


// const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();

// app.use(express.static('public'))

const port = 3000;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

// app.METHOD(PATH, HANDLER)

// app --> instance of express

// METHOD --> HTTP Method GET, POST, PUT, DELETE, PATCH ...

// PATH --> route

// HANDLER --> function that will exc when path is matched

// app.get('/', function(req, res) {
//     // let data = fs.readFileSync('input.txt', {encoding: "UTF8"});
//     res.send("Hi!");
// });

// app.post("/", function(req, res) {
//     // res.send("POST is invoked.");
//     res.send("Hi!");
// });


// app.put("/", function(req, res) {
//     // res.send("PUT is invoked.");
//     res.send("Hi!");
// });

// app.all('/', function(req, res) {
//     res.send("Hi! Its from ALL.");
// });


// http://localhost:3000/?num1=2&num2=4&num3=5

// app.get('/add', function(req, res) {
//     let num1 = req.query.num1;
//     let num2 = req.query.num2;
//     let num3 = req.query.num3;
//     res.send(num1 + num2 + num3);

// });

// http://localhost:3000/display/{Tom}

// app.get('/display/:name', function(req, res) {
//     res.send(req.params.name)
// });

// npm install body-parser --save

const bodyParser = require('body-parser');
const { application } = require("express");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// app.use(express.json())


// var myLogger = function(req, res, next) {
//     console.log("Logged.")
//     next();
// }

// app.use('/display', myLogger);

// app.post('/display', function(req, res) {
//     console.log(req.body);
//     res.send(req.body);
// });

// app.post('/displayTest', function(req, res) {
//     console.log(req.body);
//     res.send(req.body);
// });

app.use(express.static('public'));

app.listen(port, () => console.log("The server is up at: ", port));