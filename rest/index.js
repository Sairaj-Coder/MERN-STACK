const { name } = require("ejs");
const express = require("express");
const { endianness } = require("os");
const app= express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
//method overiding to convert any post request in require
var methodOverride = require('method-override');
app.use(methodOverride('_method'))
 





app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//parsing data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//

let port =8080;
let posts =[
    {
        id:1,
        name:"sairaj",
        problem:"I am trying my best",
    },
    {
        id:uuidv4(),
        name:"Samruddhi",
        problem:"I am doing Internship",
    },


];

app.listen(port,()=>{
    console.log(`Boss i am listing at port number ${port}`);
})
//seeing all post

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
})




/*adding new post */

app.get("/post/new",(req,res)=>{
    res.render("new.ejs",{uuidv4});
})

app.post("/post",(req,res)=>{
    
    posts.push(req.body);//here we can also extract data using req.param
    //and then crete id and saving it
    
    console.log(req.body);
    
    //redirect to get api
    res.redirect('/post');
    
})


//finding post on the basis of id 
app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    
    let data = posts.find((p)=>id==p.id);//finding post in array i dont understand but not neccessary in rest
    // 
    if(data===undefined){
        res.send("No querry");
    }
    else{
        res.render("find.ejs",{data});
    }
    console.log("this is get request");
})


//update post we can use put also
app.patch("/post/:id",(req,res)=>{
    let {id} = req.params;
    let {newproblem} =req.body;//if we remove bracket we can change newproblem to anyname because
    //curly bracket req.body.newproblem  ==>it searches like this
    let data = posts.find((p)=>id==p.id);
    data.problem=newproblem;
    
    console.log(data);
    
    res.redirect("/post");//send request to app.get("/post");
})
app.get("/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    let data = posts.find((p)=>id==p.id);
    res.render("edit.ejs",{data});
})

//delete =>
// app.get("/post/:id/delete",(req,res)=>{
//     let {id} = req.params;
//     let data = posts.find((p)=>id==p.id);
//     // res.render("delete.ejs",{data});
   

// })
app.delete("/post/:id",(req,res)=>{
    let {id} = req.params;
    let index = posts.findIndex((p)=>id==p.id);
    console.log(index);
   
    if(index>-1){
    posts.splice(index, 1); // Removes 1 element at the specified index
  }
    res.redirect('/post');
    // res.send("post deleted");

})
//hw==>instagram add photo