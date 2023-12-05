const http = require("http")


const server = http.createServer((req, res) =>
{
    res.writeHead(200,{"content-type": "text/html"})
    res.write("<h1>this i$ response from node js </h1>")
    res.write("<h1>this is response from node js on port 6666</h1>")
    res.end("Ok bye ")
}).listen(9898)