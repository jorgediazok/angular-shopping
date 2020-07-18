const { Router } = require("express");
const router = Router();

const verifyToken = require("../controllers/verifyToken");
const User = require("../models/User");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secretsecretword");
  res.status(200).json({ token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("The email does not exist");
  const validPassword = await user.validatePassword(password);
  if (!validPassword) return res.status(401).send("Wrong Password");
  const token = jwt.sign({ _id: user._id }, "secretsecretword");
  return res.status(200).json({ token });
});

router.get("/profile", verifyToken, (req, res) => {
  res.json([
    {
      _id: 1,
      message: "Welcome back! Continue shopping with us",
    },
  ]);
});

module.exports = router;
