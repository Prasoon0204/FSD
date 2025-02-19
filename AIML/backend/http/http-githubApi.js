const http = require('http');
const axios = require('axios');

const server = http.createServer(async(req,res)=>{
    // res.writeHead(200,{"content-type":"text/plain"});
    res.writeHead(200,{"content-type":"text/html"});

    const respose = await axios.get("https://api.github.com/search/users",{
        params: {
            q:"location:ghaziabad"
        }
    });
    const data = respose.data.items;
    let frontData = `<html><head></head><body>`
    data.forEach((user) => {
        frontData+=`<div><img src = "${user.avatar_url}"></div>`
    });
    frontData += `</body></html>`
    res.end(frontData);
})

const port = 3000;
server.listen(port,()=>{
    console.log(`server is listening on port : ${port}`)
})