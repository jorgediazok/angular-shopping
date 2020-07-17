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
  res.status(200).json({ token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("The email does not exist");
  if (user.password !== password) return res.status(401).send("Wrong Password");
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

async function verifyToken(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("Authorization Denied");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
      return res.status(401).send("Authorization Denied");
    }
    const payload = await jwt.verify(token, "secretsecretword");
    console.log(payload);
    if (!payload) {
      return res.status(401).send("Authorization denied");
    }
    req.userId = payload._id;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).send("Unauthorized request");
  }
}

module.exports = router;
