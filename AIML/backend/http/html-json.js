const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req,res) => {
    
    // const data =  users.map(user => (
    //     user.name
    // ))
    // let data = "";
    // users.forEach((user)=>{
    //     data += user.name + ' ';
    // })
    if(req.url === '/'){
        res.writeHead(200, {
            'content-type': 'application/json'
        })
        const data = await fs.readFile('./users.json','utf8');
        res.end(JSON.stringify(JSON.parse(data)))
    }
    else if(req.url === '/home'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const data = await fs.readFile('./codepen.html','utf8');
        res.end(data)
    }
    else{
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const data = await fs.readFile('./error.html','utf8');
        res.end(data)
    }
})

const port = 3000;
server.listen(port,()=>{
    console.log(`server is running on ${port}`)
})