const express = require("express");
const app=express();

let port=8080;

// console.dir(express);

//now .listen function starts server and wait for response
app.listen(port,()=>{
    console.log(`Porting is started ready to listen ${port} `);
})

//now .use will tell us that is our website search i.e did we receve a request or
//not
/*
let count=0;
app.use((req,res)=>{
    
    //console.log(`total request receve ${count++}`);//-->working
    // console.log(req);//->it is object it as many method
    console.log(`hello sir we reciver a request on ${port} sending data`);
    
    // let code=`<h1>Hello sir</h1><ul><li>mango</li>
    // <li>orange</li>
    // </ul>`
    // res.send(code);
    // res.send({
    //   name:"apple",
    //   color:"red",
      
    // })


})

*/




/*routing*/
app.get('/',(req,res)=>{
    res.send("You are in default or root path sir");

})
// app.get('/orange',(req,res)=>{
//     res.send("You are in orange default or root path");

// })
// app.get('/apple',(req,res)=>{
//     res.send("You are in apple");

// })
// /*default routing if path is wrong  always at the end*/
// app.use((req,res)=>{
//     res.send("hello sir you are on wrong track/path go back");
// })
//we can use app.post also

// app.post("/",(req,res)=>{
//     res.send("welcome to post");
// })



//we are commenting some part to understand the path parameter


//now we are going to learn about path parameter
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`<h1>this account belongs to ${username} and id is ${id}</h1>`)
});


//query string
// app.get("/search",( req , res ) => {
//     let {q}=req.query;
//     res.send(`hello welcome to query house ${q}`);
//     console.log(q);
// });
app.get("/searching",( req , res ) => {
    console.log(req.query);
    let {data,color}=req.query;
    if(!data){//if no query
        res.send(`<h1>Nothing search</h1>`)
    }
    res.send(`hello welcome to query house ${data}`);
    console.log(data, color);
});














//
// app.use((req,res)=>{
    
    
//     console.log(`hello sir we receve a request on ${port} sending data using response`);
    // res.send({
    //   name:"apple",
    //   color:"red",
      
    // })

// })


//