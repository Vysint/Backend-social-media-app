const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/UserController");

router.get("/:id", userControllers.getUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser)

module.exports = router;
