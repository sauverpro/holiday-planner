const  mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
    FullNames :{type: String, required: true},
    email:{type: String},
    PhoneNumber:{type: String, required: true},
    Password:{type: String, required: true},
    Location: String,
    Role: {type: String, default: "user"}
})
export const UserModel = mongoose.model("users",userSchema)