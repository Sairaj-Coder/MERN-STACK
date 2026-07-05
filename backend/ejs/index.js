const express=require("express");
const app= express();
//importing path function

const path = require("path");


const port = 9000;


app.listen(port , ()=>{
    console.log("Port is ready");
    console.log(port);
})


app.set("view engine","ejs");

//this will make views globally accessible by 
app.set("views",path.join(__dirname,"/views"));





app.get("/",(req,res)=>{
    res.render("index.ejs");
    console.log("receve request");
})


