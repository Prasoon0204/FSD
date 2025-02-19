const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async (req,res)=>{
    console.log("Hello from the server!");
    res.writeHead(200,{"content-type":"text/html"});
    // res.writeHead(200,{"content-type":"application/json"});
    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    const response = await axios.get("https://dummyjson.com/products");
    const productsData = response.data.products;
    let frontData = `<html><head></head><body>`
    productsData.forEach((product) => {
        frontData+=`<div><img src = "${product.images[0]}"></div>`
    });
    frontData += `</body></html>`
    // res.end(JSON.stringify(productsData))
    res.end(frontData);
});

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});