const mongoose= require("mongoose");

const chatschema = new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
    to:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        maxLength:[50,"The max length of msg is 50 words only"],
    },

    created_at:{
        type:Date,//it is type of function
        default:`${Date().slice(0,25)}`,
    }
})
const Chat =  mongoose.model("Chat",chatschema);
// console.log(`${Date().slice(0,25)}`);//it returns value of function
module.exports=Chat;