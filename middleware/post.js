const Post = require('../models/Post');
const User = require('../models/User');

async function getAlbumPostsRecur(album) {
    async function recur(post){
      post.user = await User.findOne({ _id: comment.user });
      post.posts = await Post.find({ post: post._id })
      for(const reply of post.posts) await recur(reply)
      return post
    }
    return await Promise.all((await Post.find({ album: album.id })).map(recur))
  }
async function getAlbumPostsIterative(album) {
    return getAllPostsIterative(...await Post.find({ album: album.id }));
  }
async function getAllPostsIterative(...initialPosts) {
    const stack = [...initialPosts];
    const posts = [...stack];
    while (stack.length) {
        const post = stack.pop();
        post.user = await User.findOne({ _id: post.user });
        post.posts = await Post.find({ post: post._id });
        stack.push(...post.posts);
    }
    return posts;
}

  module.exports = {
	getAlbumPostsIterative,
    getAllPostsIterative
}