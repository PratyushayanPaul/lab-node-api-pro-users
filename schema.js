var mongoose = require("mongoose") //mongoose module
var validator = require("validator")
let firstschema = new mongoose.Schema(
    {
        name:{type:String, required: true, uppercase: true},
        email:{type:String, validate:(value)=>{
            return validator.isEmail(value)
        }},
        age:{type:Number, required:true},
        prograd_id:{type:Number, required:true},
        squad:{type:Number, required:true}
    }
)

module.exports=mongoose.model("FirstModel", firstschema)