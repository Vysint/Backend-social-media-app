const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/UserController");

router.get("/:id", userControllers.getUser);

module.exports = router;
