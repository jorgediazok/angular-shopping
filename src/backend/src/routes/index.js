const { Router } = require("express");
const router = Router();

const verifyToken = require("../controllers/verifyToken");
const User = require("../models/User");

const jwt = require("jsonwebtoken");

router.get("/api", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  //Encriptar password
  newUser.password = await newUser.encryptPassword(password);
  //Grabar usuario
  await newUser.save();
  //Generar Token
  const token = jwt.sign({ _id: newUser._id }, "secretsecretword");
  res.status(200).json({ token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("The email does not exist");
  //Validar password
  const validPassword = await user.validatePassword(password);
  if (!validPassword) return res.status(401).send("Wrong Password");
  //Generar token
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
