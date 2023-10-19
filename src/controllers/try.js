import { upload } from "../utils";
import { uploadToCloudinary } from "../utils";

export const uploadController = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const filePromises = [];
      res.send(req.files['gallery'])
console.log(req.body," this is the files to ");
    //   Object.keys(req.files).forEach((key) => {
    //     const file = req.files[key];
    //     console.log(file," this is file");
    //     // const uploadPromise = uploadToCloudinary(file.buffer);
    //     // filePromises.push(uploadPromise);
    //   });

      //   const cloudinaryUploadResults = await Promise.all(filePromises);
      //   console.log("Cloudinary Upload Results:", cloudinaryUploadResults);
      //   return res
      //     .status(200)
      //     .json({
      //       message: "Files uploaded to Cloudinary successfully",
      //       cloudinaryUploadResults,
      //     });
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to upload files to Cloudinary" });
  }
};
