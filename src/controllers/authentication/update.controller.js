import { UserModel } from "../../models";
export const update = async (req, res) => {
  try {
    const updateId = req.userId;
    console.log("user id",updateId)
    let checkUser = await UserModel.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(409).json({ message: "email already exist" });
    }
    console.log("userId", updateId);
    const newData = req.body;
    const user = await UserModel.findByIdAndUpdate(updateId, newData);
    if (user) {
      res.status(200).json({
        status: 200,
        message: "updated well",
        data: user,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
