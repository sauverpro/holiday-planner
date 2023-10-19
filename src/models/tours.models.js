const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  destination: { type: String, required: true },
  backdropImage: { type: String, required: true },
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Duration: { type: String, required: true },
  GroupTize: { type: String, required: true },
  Price: { type: String, required: true },
  Discount: { type: String, required: true },
  TourType: { type: String, required: true },
  Departure: { type: String, required: true },
  Seats: { type: String, required: true },
  fromMonth: { type: String, required: true },
  toMonth: { type: String, required: true },
  departureTime: { type: String, required: true },
  ReturnTime: { type: String, required: true },
  Gallery: { type: Array}
});
export const tourModel = mongoose.model("Tours", tourSchema);
