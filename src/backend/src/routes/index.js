const { Router } = require("express");
const { consoleTestResultHandler } = require("tslint/lib/test");
const router = Router();

const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", (req, res) => {
  res.send("register");
});

module.exports = router;
