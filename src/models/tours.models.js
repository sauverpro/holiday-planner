const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const tourSchema = mongoose.Schema({
  destination: { type: String},
  backdropImage: { type: String},
  Title: { type: String},
  Description: { type: String},
  Duration: { type: String},
  GroupTize: { type: String},
  Price: { type: String},
  Discount: { type: String},
  TourType: { type: String},
  Departure: { type: String},
  Seats: { type: String},
  fromMonth: { type: String},
  toMonth: { type: String},
  departureTime: { type: String},
  ReturnTime: { type: String},
  Gallery: { type: Array}
});
tourSchema.plugin(mongoosePaginate);
export const tourModel = mongoose.model("Tours", tourSchema);
