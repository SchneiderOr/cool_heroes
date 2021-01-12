const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello!");
});

router.get("/health", (req, res, next) => {
  res.send("OK");
});

module.exports = router;
