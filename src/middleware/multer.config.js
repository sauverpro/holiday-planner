import multer from "multer";
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"tour_asset_images");
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const upload = multer({dest:'tour_asset_images',storage:storage})
export const uploads = upload.single('backdropImage')
