const  mongoose = require("mongoose");

 const contactSchema = mongoose.Schema({
     email:{type: String, require: true},
    body :{type: String, required: true},
    isReplied:{type: Boolean, default : false}
})
export const contactModel = mongoose.model("contact",contactSchema)