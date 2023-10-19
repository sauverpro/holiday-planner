export const uploadController = async (req, res) => {
  try {
    console.log(req.files['gallery']);

    res.send(req.files)

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to upload files to Cloudinary" });
  }
};
