const ejs = require("ejs");
const express = require("express");
const app=express();
const path=require("path");

//
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

//serving static file (part of middle ware) 
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
//






//setting port
const port = 3000;

// const data=require("./views/data.json");

app.listen(port,()=>{
    console.log("Port 3000 is ready");
})

app.get("/home",(req,res)=>{
    
    res.render("instgram.ejs");
})
app.get("/ig/:username",(req,res)=>{
    // res.send("hello");
    let {username} = req.params; 
    const instdata=require("./views/data.json");
    let data=instdata[username];
    if(data){
    console.log(data);
    
    res.render("instgram.ejs",{data});
    }
    else{
        res.send("NO data found  even we can create file called error and render it");
        console.log(data);
    
    }
    
})

app.get("/",(req,res)=>{
    res.render("index.ejs");
})