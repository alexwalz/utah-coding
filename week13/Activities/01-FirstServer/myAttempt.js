var http = require("http")
var PORT = 8080;

function handleRequest(request, response){
    response.end("It works!!  Path hit: " + request.url)
}

var server =  http.createServer(handleRequest);

server.listen(PORT,function(){
    console.log("Server listening on: http://localhost:", PORT)
})