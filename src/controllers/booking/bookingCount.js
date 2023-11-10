import { bookingModel } from "../../models";

export const bookingCount = async (req, res) => {
  try {
    let month = req.body;

    const result = await bookingModel.aggregate([
      {
        $match: {
          Date: month.date,
        },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);
    const bookingCount = result.length > 0 ? result[0].count : 0;
    res.status(200).json({
      message: "data found",
      data: bookingCount,
    });
    //   return bookingCount;
  } catch (error) {
    console.log("error", error);
    res.json({ error: "we had ana error" });
  }
};
