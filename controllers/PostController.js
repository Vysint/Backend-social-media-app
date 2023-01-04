const mongoose = require("mongoose");

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
