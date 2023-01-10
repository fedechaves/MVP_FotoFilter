const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const albumsController = require("../controllers/albums");

//Post Routes - simplified for now
router.get("/:id", albumsController.getAlbum);

router.post("/createAlbum", upload.single("file"), function(req, res) {
    if (req.fileValidationError) {
        req.flash("errors", {msg: "File type is not supported"})
         return res.redirect('/profile');
         // or return res.end();
         // or even res.render(); whatever response you want here.
    }
}, albumsController.createAlbum);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteAlbum/:id", albumsController.deleteAlbum);

module.exports = router;
