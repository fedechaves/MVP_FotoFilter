const multer = require("multer");
const path = require("path");

//const maxSize = 1 * 1024 *1024
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      req.fileValidationError = "File type is not supported";
      //cb(new Error("File type is not supported"), false);
      cb (null, false, req.fileValidationError)
      return; 
    }
    cb(null, true);
  },
  //limits: { fileSize: maxSize }
});


