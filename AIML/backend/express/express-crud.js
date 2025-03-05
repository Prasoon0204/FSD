import express from "express";
import fs from "fs/promises";

const data = await fs.readFile("users.json");
const users = JSON.parse(data);

const app = express();
const port = 3000;

app.use(express.json())

app.get("/api",(req,res)=>{
    res.send("Welcome to my API");
})

app.get("/getusers/:id",(req,res)=>{
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    res.send(user);
})

app.patch("/api/updateUser/:id",(req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id)
    users[index].name = name;
    res.send("user updated successfully");
})

app.delete("/api/deleteUser/:id",(req,res)=>{
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id)
    users.splice(index,1);
    res.send("user deleted successfully");
})

app.get("/getusers",(req,res)=>{
    res.send(users);
})

app.post("/api/users", (req, res) => {
    const bodydata = req.body;
    console.log(bodydata);
    res.send("Data received successfully");
});

app.post("/api/createuser", (req, res) => {
    const {name,email} = req.body;
    const newid = users.length > 0 ? users[users.length-1].id+1 : 1;
    users.push({id:newid,name,email});
    res.send("User Created successfully");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})