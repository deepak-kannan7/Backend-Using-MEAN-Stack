const mongoose=require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/test",{
}).then(()=>{
    console.log("Conn success");
}).catch((err)=>{
    console.log(err);
})
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection
