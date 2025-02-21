import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to Express");
})

// ---------------------------------------------------------------------------------------

// app.get('/api',(req,res)=>{
//     const data = req.query;
//     console.log(data)
//     res.send(`welcome to ABES: ${data.name} and Roll no. is ${data.rollno}`);
// })

// ---------------------------------------------------------------------------------------

// app.get('/api',(req,res)=>{
//     try{
//         const {name,rollno} = req.query;
//         if(!name) return res.status(400).send("Name is required");
//         else res.send(`welcome to ABES: ${name} and ${rollno}`);
//     } catch(error){
//         console.log(`Error: ${error.message}`)
//     }
// })

// ---------------------------------------------------------------------------------------

app.get('/api/:name/:rollno',(req,res)=>{
    try{
        const {name,rollno} = req.params;
        res.send(`Welcome ${name} Roll No ${rollno}`)
    } catch(error){
        console.log(`Error: ${error.message}`)
    }
})

// ---------------------------------------------------------------------------------------

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});