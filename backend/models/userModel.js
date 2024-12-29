import mongoose, { Schema } from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false});

const userModel=mongoose.model.user||mongoose.model('user',userSchema);
 
export default userModel;