var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end("You're a good boy");
}

function handleRequestTwo(request, response) {
    response.end("You're a bad boy");
}


var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);
