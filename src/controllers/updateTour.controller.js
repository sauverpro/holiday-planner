import { tourModel } from "../models";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();
const { CLOUD_NAME, API_KEY, API_SECRETE } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRETE,
});
export const updateTours = async (req, res) => {
  try {
    const updateId = req.params.tourID;
    let galleryImage = [];
    let backdropImage = await cloudinary.uploader.upload(
      req.files["backdropImage"][0].path
    );
    for (let index = 0; index < req.files.gallery.length; index++) {
      galleryImage.push(
        (await cloudinary.uploader.upload(req.files.gallery[index].path))
          .secure_url
      );
    }
    console.log(galleryImage);
    let add = await tourModel.findByIdAndUpdate(updateId,{
      ...req.body,
      backdropImage: backdropImage.secure_url,
      Gallery: galleryImage,
    });
    if (!add) {
      return res.status(404).json({
        message: "failed to update tour",
      });
    }
    res.status(201).json({
      message: "Tour updated successfully",
      data: add,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
