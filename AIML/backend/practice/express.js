import express from 'express';

const server = express();
const port = 3000;

// -------------------------------------------------------------------------------

// server.get('/',(req,res)=>{
//     res.send("Welcome to Express");
// })

// -------------------------------------------------------------------------------

// server.get('/api',(req,res)=>{
//     const data = req.query;
//     console.log(data)
//     res.send(`name: ${data.name} Roll No: ${data.rollno}`)
// })

// -------------------------------------------------------------------------------

server.get('/api/:name/:rollno',(req,res)=>{
    try{
        const {name,rollno} = req.params;
        console.log(name,rollno)
        res.send(`name: ${name} Roll No: ${rollno}`)
    } catch(error){
        console.log(error.message);
    }
})

// -------------------------------------------------------------------------------

server.listen(port,()=>{
    console.log(`server is running at port ${3000}`);
})