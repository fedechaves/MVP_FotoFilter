const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const albumsController = require("../controllers/albums");

//Post Routes - simplified for now
router.get("/:id", albumsController.getAlbum);

router.post("/createAlbum", upload.single("file"), albumsController.createAlbum);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteAlbum/:id", albumsController.deleteAlbum);

module.exports = router;
