const express = require('express');
const mongoose  = require('mongoose');

const app = express();

mongoose.set('strictQuery',true);

mongoose.connect('mongodb://0.0.0.0:27017/student-api',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("mongodb connected..."))
.catch((err)=> console.log("not connected"));

app.listen(3000,()=>{
    console.log("Runing on Port 3000");
})



// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/student-api",
// {
// useNewUrlParser: true,
// useUnifiedTopology:true
// }
// ).then(()=>{
//     console.log("connection is successful");
// }).catch((e)=>{
//     console.log(e);
// })
