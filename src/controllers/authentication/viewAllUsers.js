import { UserModel } from "../../models";

export const getData = async (req, res) => {
  try {
    let data = await UserModel.find();
    if (!data) {
      return res.status(200).json({ status: 200, data: data });
    }
    res.status(200).json({ status: 200, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message : "internal server error"
    })
  }
};
