const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const validationErrors = [];
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      validationErrors.push({ msg: "File type is not supported" })
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
