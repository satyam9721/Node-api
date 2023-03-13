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

app.post("/students",async(req,res)=>{
    try{const user = new Student(req.body);

        const createUser =await user.save();
        res.status(201).send(createUser);

    }catch(e){
        res.status(400).send(e);
    }
 })

//reading data from database
app.get("/students",async(req,res)=>{
    try{

       const studentData= await Student.find();
       res.send(studentData);
    }catch(e){
        res.send(e);
         
    }
})

//get the indivual student data using id

app.get("/students/:id",async(req,res)=>{
    try{
 const _id = req.params.id;
 Student.findById({_id});
 const studentData = await Student.findById(_id);

 if(!studentData){
    return res.status(404).send();
 }else{
    res.send(studentData);
 }
    }catch(e){
res.send(e);
    }
})



app.listen(port,()=>{
    console.log(`Connected to this ${port}`)
})
