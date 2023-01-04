const express = require("express");

const router = express.Router();

const postControllers = require("../controllers/PostController");

router.post("/", postControllers.createPost);

router.get("/:id", postControllers.getPost);

router.put("/:id", postControllers.updatePost);

module.exports = router;