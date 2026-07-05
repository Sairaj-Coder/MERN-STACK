//this file is created to initialize  databasess or for testing purpose
const mongoose= require("mongoose");
//importing schema
const Chat=require("./models/chats");
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(()=>{
    console.log("Success")
})
.catch((err)=>{
    console.log(err);
})




let allChats = [
    {
        from:"Berlin",
        to:"Professor",
        message:"Pyar li fitrat me hi doka hai",
        // created_at:new Date(),
    },
    {
        from:"Nyrobi",
        to:"Professor",
        message:"Berlin bimar hai abh se incharge me hua",
        // created_at:new Date(),
    },
    {
        from:"Isha",
        to:"Sairaj",
        message:"Bag ekada breakup kelyvr parat yes nahi bolnar",
        // created_at:new Date(),
    },
    {
        from:"Sairaj",
        to:"Isha",
        message:"Ok",
        // created_at:new Date(),
    },
   

]
Chat.insertMany(allChats)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
