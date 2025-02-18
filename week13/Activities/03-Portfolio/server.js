var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {
  var path = req.url;
  switch (path) {

    case "/":
      return displayRoot(path, req, res);

    case "/portfolio":
      return displayPortfolio(path, req, res);

    default:
      return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
}
