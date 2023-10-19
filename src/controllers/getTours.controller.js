import { tourModel } from "../models";
export const getTours = async (req, res) => {
  try {
    let data = await tourModel.find();
    if (!data) {
      return res.status(401).json({ message: "sorry for nothing"});
    }
    res.status(200).json({ status: 200, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message : "internal server error"
    })
  }
};
