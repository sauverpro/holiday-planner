import { bookingModel } from "../../models";
export const getBookings = async (req, res) => {
  try {
    let data = await bookingModel.find();
    if (!data) {
      return res.status(404).json({ message: "Sorry nothing's found"});
    }
    res.status(200).json({ status: 200, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message : "internal server error"
    })
  }
};
