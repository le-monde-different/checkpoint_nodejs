console.log("HELLO WORLD")


var http=require("http");
http.createServer(function(request,Response){
    Response.writeHead(200,{'Content-Type':'text/plain'});
    Response.end("Hello Node\n")
}).listen(3000);
console.log('server running at http://127.0.0.1:3000/');
