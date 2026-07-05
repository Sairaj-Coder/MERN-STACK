const mongoose = require("mongoose");
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}
main()
.then((res)=>{
    console.log("Successfull");
})
.catch((err)=>{
    console.log("err");
})
//schema validation
const bookrule = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        default:100,
    },
});

const Books = mongoose.model("Books",bookrule);


// const book1 = new Books ({title:"Sairaj",author:"Unknow"})
// book1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("This is error");
// })
const schemavalidation = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20,
    },
    price:{
        type:Number,
        default:1,
        max:[500,"THis is error message display"],
        
    },
    category:{
        type:String,
        enum:["comic","non-comic"],
    },
    generalbooks:[String],
});

const newbook=mongoose.model("newbook",schemavalidation);
// const newbook1=new newbook({name:"Marvel",price:500,category:"comic",generalbooks:["fictional","non-fictional"]});
// const newbook2=new newbook({name:"black panther",price:500,category:"comic",generalbooks:"fictional"});
// newbook2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
//update and applying constrain

newbook.findByIdAndUpdate("6a1d3ea3d4ca14345656f379",{price:50},{new:true,runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})
