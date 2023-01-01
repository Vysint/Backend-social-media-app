const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Auth Route");
});

module.exports = router;
