// console.log("Hi Guys ! I am run by node.js !")


// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(2,3));

var http = require("http");

http.createServer(function (request, response) {

    response.writeHead({'Content-Type': 'text/plain'});

    response.statusCode(404).end("Hello World !");

}).listen(8081);