const Post = require("../models/post");

// Create a new POST

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET A POST

exports.getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Post

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  let post;
  try {
    post = await Post.findById(id);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated!");
    } else {
      res.status(403).json("Action forbidden!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
