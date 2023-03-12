const express = require("express");
require("./db/conn"); //gathering information from conn file
const Student = require("./models/students") //geeting the collection file like schema
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); //converting undefined data in to json in terminal



//creating student


app.post("/students",(req,res)=>{
    console.log(req.body);
const user = new Student(req.body);
//below line saving data in database and handling the promise
user.save().then(()=>{
    res.status(201).send(user);
}).catch((e)=>{
    res.status(400).send(e);
})



    //res.send("Hello sexy Satyam");
})

app.listen(port,()=>{
    console.log(`Connected to this ${port}`)
})