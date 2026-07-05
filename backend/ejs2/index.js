const express=require("express");
const ejs=require("ejs");
const path = require("node:path");
const app=express();

const port =9000;

/*seating views */
app.set("views",path.join(__dirname,"/views"))

app.listen(port,()=>{
    console.log("the port is listening");
})
app.get("/",(req,res)=>{
    console.log("the request receved")
    res.send("<h1>hello</h1>");

})
app.get("/dice",(req,res)=>{
    let value= Math.floor(Math.random()*6)+1;
    res.render("roldice.ejs",{num:value});

})

app.get("/interpolation",(req,res)=>{
    console.log("the request receved")
    res.render("index.ejs");

})
/*instgram activity */
app.get("/ig/:username&:pass",(req,res)=>{
    let {username,pass}=req.params;

    let followers = ["sairaj","samruddhi","vaishnavi", "nikhil"];




    console.log(username, pass);
    res.render("instgram.ejs",{username, pass, followers} )
})