import { tourModel } from "../models/tours.models";
import { v2 as cloudinary } from "cloudinary";

const { CLOUD_NAME, API_KEY, API_SECRETE } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRETE,
});
export const addTour = async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.file.path);
    console.log("images", image);
    const tour = req.body;
    console.log(req.file);
    console.log("this is tour", tour);
  } catch (error) {
    console.log(error);
  }
};
