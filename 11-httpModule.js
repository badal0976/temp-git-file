const http = require("http");
//create a server object:
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(` 
        <h1>Oops</h1>
        <p>this is the paragraph</p>
        <a href = "/"> back home </a>
        `); //end the response
});
server.listen(5000); //the server object listens on port 8080
