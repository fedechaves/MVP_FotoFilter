const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:albumid/:id", commentsController.createComment);
//! Added delete comment route
router.delete("/deleteComment/:albumid/:id/:commentid", commentsController.deleteComment);


module.exports = router;
