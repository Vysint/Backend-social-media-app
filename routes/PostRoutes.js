const express = require("express");

const router = express.Router();

const postControllers = require("../controllers/PostController");

router.post("/", postControllers.createPost);

module.exports = router;
