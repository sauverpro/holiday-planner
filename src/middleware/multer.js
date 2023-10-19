import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tour_asset_images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // File naming logic
  },
});

// Multer upload configuration for handling multiple fields
const upload = multer({ dest: "tour_asset_images", storage: storage }).fields([
  { name: "backdropImage", maxCount: 1 },
  { name: "gallery", maxCount: 10 },
]);
export default upload;
