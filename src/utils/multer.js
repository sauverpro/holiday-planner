const multer = require('multer');
// Multer storage configuration
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null,file.originalname); // File naming logic
    }
});

// Multer upload configuration for handling multiple fields
export const upload = multer({storage: storage }).fields([
    { name: 'backdropImage'}, { name: 'gallery'} // 'documents' field can have up to 5 files
]);


