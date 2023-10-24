import { UserModel, bookingModel, tourModel } from "../../models";
export const Booking = async (req, res) => {
  try {
    const { userId } = req;
    console.log("userId", userId);
    const book = req.body;
    req.body.isPayed = false;
    let checkUser = await UserModel.findById(userId);
    if (!checkUser) {
      return res.status(409).json({
        message: "please login to perform this action",
      });
    }
    let checkTour = await tourModel.findById(book.tourId);
    if (!checkTour) {
      return res.status(404).json({
        message: "Tour doesn't found",
      });
    }
    const addToBooking = await bookingModel.create({
      ...req.body,
      userId: userId,
    });
    if (!addToBooking) {
      return res.status(404).json({
        message: "failed to book please try again later",
      });
    }
    res.status(201).json({
      message:
        "You have booked successfully now you can pay with your desired method",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
