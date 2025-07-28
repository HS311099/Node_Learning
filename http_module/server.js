const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Welcome to the Event Emitter Example!");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to the Event Emitter Example!</h1>");
    res.end();
  }
  if (req.url === "/source-code") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Welcome to the Event Emitter Example!");
    res.write("Source code is available at:");
    res.end();
  }
    if (req.url === "/contact") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Welcome to the Event Emitter Example!");
    res.setHeader("Content-Type", "text/plain");
    res.write("For any queries, please contact us at:");
    res.end();
  }
});

//web server

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
