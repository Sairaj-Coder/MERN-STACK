const express= require("express");
const app=express();
const mongoose= require("mongoose");
//importing schema
const Chat=require("./models/chats");
const path = require("path");
//method overide
var methodOverride = require('method-override');
app.use(methodOverride('_method'))


app.set("view engine", "ejs");//if view engine is set then it is not compulsory to 
//write update.ejs or file.ejs
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));


// parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up mongose

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then((res)=>{
    console.log("mongoose ready");
})
.catch((err)=>{
    console.log(err);
});
//porting
let port =8080;
app.listen(port,()=>{
    console.log("Boss listening at port",port);
})



//index route
// app.get("/chats",(req,res)=>{
//     Chat.find()
//     .then((resu)=>{
//         res.render("find.ejs",{resu});
//         console.log("data send");
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// })

//reading chats
app.get("/chats",async (req,res)=>{
    let resu= await Chat.find()
    // console.log(resu);
    res.render("read.ejs",{resu});
})


//adding new chats
//form get/chats/new
app.get("/chats/new",(req,res)=>{
    res.render("create.ejs");
})
//post /chats
app.post("/chats",(req,res)=>{
    // console.log(req.body);
    
    const chat = new Chat(req.body);
    chat.save();
    res.redirect("/chats");
})

//delete
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(`${id}`)//waiting until deleting
    res.redirect("/chats");
});

//update
app.get("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let data=await Chat.findById(`${id}`);
    res.render("update.ejs",{data});//if view engine is already confirm then it is now compulsory to write .ejs
    // console.log(data);
})
app.patch("/chats/:id",async (req,res)=>{
    let msg=req.body.message;
    let {id}=req.params;
    await Chat.findByIdAndUpdate(id, {message:msg});
    res.redirect("/chats");
    console.log(msg,id);
})









