const { Router } = require("express");
const router = Router();

const User = require("../models/User");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secretsecretword");
  res.json({ token });
});

module.exports = router;
