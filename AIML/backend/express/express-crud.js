import express from "express";

const users = [{
    id:1,
    name:'Dev',
    email:'dev@abes.ac.in'
}]

const app = express();
const port = 3000;

app.get("/api",(req,res)=>{
    res.send("Welcome to my API");
})

app.get("/getusers/:id",(req,res)=>{
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    res.send(user);
})

app.get("/getusers",(req,res)=>{
    res.send(users);
})

app.use(express.json())

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