const express = require("express");
const app= express();
const port = 3000;

app.use(express.urlencoded({extended:true}))//to parse urlencoded
app.use(express.json());//to parse json data

app.listen(port, (req,res)=>{
    console.log(`hello sir listening at server ${port}`);
    
});

app.get("/register",(req,res)=>{
    let {user , pass} = req.query;
     console.log(user , pass);
    res.send(`Hello Master ${user} this is get request`);

})
app.post("/register",(req,res)=>{
    let {userr , pass , data} = req.body;
    console.log(userr , pass , data);
    res.send(`Hello Master ${userr} this is get request`);


})