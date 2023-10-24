const  mongoose = require("mongoose");

 const bookingSchema = mongoose.Schema({
    userId: {type: String, required :  true},
    tourId: {type: String, required :  true},
    isPayed: {type: Boolean, default: false},
    paymentMethod: {type: String, required :  true}
})
export const bookingModel = mongoose.model("booking",bookingSchema)