const mongoose = require("mongoose");
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wadia');
}
main()
.then((res)=>{
    console.log("Successfull");
})
.catch((err)=>{
    console.log("err");
})
const userschema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User =mongoose.model("User",userschema);//creating model



//inserting single data mostly we are going to use it only

// const user2 = new User({

//     name:"samrudhi chandraknat shirole",
//     email:"samruddhishirole2@gmail.com",
//     age:20

// });
//user2.save()//it is  compulosry to write ;
//.then((res)=>{//but it is not compulsory to write then method
//    console.log(res);
//})   //this save data into mongose
// console.log(user2);
// User.insertMany([{
//     name:"Isha thorat",
//     email:"Ishathorat@gmail.com",
//     age:17

// },{
//     name:"Prajawali bhand",
//     email:"prajawalibhand@gmail.com",
//     age:18

// },{
//     name:"Dhurva ohol",
//     email:"durvaohol@gmail.com",
//     std:20
// }])
// .then((res)=>{
//     console.log("data stored")
// })
// .catch((err)=>{
//     console.log(err);
// })


//find=>finding all the data 
// User.find().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });
//finding speacific data
// User.find({name:{$eq:"samrudhi chandraknat shirole"}})
// .then((res)=>{
//     console.log(res);
// })


//update Many /One

// User.updateMany({age:{$gt:15}},{age:30})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//findOneAndUpdate({},{},{option:true})-->we can remove last key value pair then it will print and then update

// User.findOneAndUpdate({age:{$gt:25}},{age:20})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.findOneAndUpdate({age:{$gt:25}},{age:20},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
//User.findByIdAndUpdate(id, update, options);

//deleting there 4 ways

// User.deleteOne({name:"Dhurva ohol"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })

// User.findByIdAndDelete("6a1c3cad9a123f4e1d5ebb17")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.findByIdAndDelete("6a1c360df25f94ac44f91e38",{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findOneAndDelete({ name: "Isha thorat"},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })