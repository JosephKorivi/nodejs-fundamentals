const http = require("http");

//  create a server 
let server = http.createServer(function(request, response) {
    // console.log(request.url);
    if(request.url === "/") {
        response.write("This is HomePage");
    } else if(request.url === "/about") {
        response.write("This is About page");
    } else if(request.url === "/contact") {
        response.write("This is contact page");
    } else {
        response.write("404 Not Found");
    }
    response.end();
});

server.on("connection", function() {
    console.log("New Connection");
})
//  listening a server

server.listen(3000, function() {
    console.log("Server is running on port 3000")
});