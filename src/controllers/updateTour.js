import { tourModel } from "../models";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();
const { CLOUD_NAME, API_KEY, API_SECRETE } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRETE,
});
export const updateTour = async (req, res) => {
  try {
    const updateId = req.params.paramid;
    const image = await cloudinary.uploader.upload(req.file.path);
    req.body.backdropImage = image.secure_url;
    const tour = req.body
    
    // console.log("this is tour", tour);
  let add = await tourModel.findByIdAndUpdate(updateId,tour);
  if (!add) {
   return res.status(404).json({
      message : "failed to update tour"
    })
  }
  res.status(201).json({
      message : "Tour updated successfully",
      data: add
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message : "internal server error",
    })
  }
};
