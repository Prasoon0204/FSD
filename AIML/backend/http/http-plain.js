const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req,res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    data = await fs.readFile('./codepen.html','utf8')
    res.end(data)
})
port = 3000;
server.listen(port,() => {
    console.log(`server is running on port ${port}`)
})