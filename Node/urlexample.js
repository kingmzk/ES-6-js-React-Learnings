const http = require("http")
const url = require("url")

//url.parse()

http.createServer((request, reponse) =>
{
    console.log(request.url)
    const urlOb = url.parse(request.url,true)
    console.log(urlOb.query.name+"  "+urlOb.query.city)
}).listen(8090)