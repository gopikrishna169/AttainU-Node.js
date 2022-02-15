// console.log("Hi Guys ! I am run by node.js !")


// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(2,3));

// var http = require("http");

// var utility = require("./utility");

// http.createServer(function (request, response) {

//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     let sum = utility(2,3);
//     // console.log(sum);
//     console.log("Hi!");
//     response.end("Hello World !" + " Sum: " + sum);

// }).listen(8081);


const express = require("express");

var randomColor = require("randomcolor");

const app = express();

const port = 3000;

// app.get('/home', (reqeuest, response) => response.send("Hey Guys ! from home !"));

app.get('/randomColor', (request, response) => {
    let color = randomColor();
    response.send(color)
});



app.get('/currentDate', (request, response) => response.send("Date route invoked."));
app.get('/joke', (request, response) => response.send("Joke route invoked."));
app.get('/qoute', (request, response) => response.send("Quote route invoked."));
app.get('/riddle', (request, response) => response.send("Riddle route invoked."));


app.get('/', (reqeuest, response) => response.send("Hey Guys !"));

app.listen(port, () => console.log("The server is up at: ", port));