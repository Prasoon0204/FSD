import express from "express";
import axios from "axios";
import cors from "cors"; // npm i cors

const app = express();
const port = 3000;
app.use(cors()); // Builtin Middleware

app.get("/api", async (req,res)=>{
    const apidata = await axios.get("https://dummyjson.com/products");
    res.send(apidata.data.products);
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})