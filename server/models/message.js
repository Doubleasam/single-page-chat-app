const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const messageSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:String
})

module.exports=mongoose.model('Message',messageSchema);