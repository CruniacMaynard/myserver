
var http = require("http");

var server = http.createServer(function(req, rec){
    response.end('It works! Path hit; ' + req.url);

});

server listen(7000, function(){
    console.log('You are a good boy')
});

server listen(7500, function(){
    console.log('You are a bad boy')
});