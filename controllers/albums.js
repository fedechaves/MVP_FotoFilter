const cloudinary = require("../middleware/cloudinary");
const Album = require("../models/Album");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const albums = await Album.find({ user: req.user.id });
      res.render("profile.ejs", { albums: albums, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const albums = await Album.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { albums: albums });
    } catch (err) {
      console.log(err);
    }
  },
  getAlbum: async (req, res) => {
    try {
      const albums = await Album.findById(req.params.id);
      const posts = await Post.find({album: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("postsFeed.ejs", { albums: albums, user: req.user, posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  createAlbum: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Album.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        user: req.user.id,
      });
      console.log("Album has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  deleteAlbum: async (req, res) => {
    try {
      // Find post by id
      let album = await Album.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(album.cloudinaryId);
      // Delete post from db
      await Album.remove({ _id: req.params.id });
      console.log("Deleted Album");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};