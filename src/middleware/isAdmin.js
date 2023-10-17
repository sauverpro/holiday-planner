import { UserModel } from "../models";

export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;
    console.log(userId,"userid");
    let users = await UserModel.findById(userId);
    console.log(users);
    if (users?.Role !== "admin") {
      return res.status(403).json({
        message:
          "you are not allowed to perform this action please log in as admin and try again",
      });
    }
    next();
  } catch (error) {
    console.log("I got an error ", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
