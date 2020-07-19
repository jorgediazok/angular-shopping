const { Router } = require("express");
const router = Router();

const verifyToken = require("../middleware/verifyToken");
const User = require("../models/User");
const productsModel = require("../models/Products");

const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    let products = await productsModel.find({});
    let productsToReturn = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
      };
    });
    res.status(200).json(productsToReturn);
  } catch {
    (err) => {
      res.status(err.status || 500);
      res.json({ Error: "Can not find any products" });
    };
  }
});

router.get("/details", async (req, res) => {
  try {
    let products = await productsModel.find({});

    res.status(200).json(products);
  } catch {
    (err) => {
      res.status(err.status || 500);
      res.json({ Error: "Can not find any products" });
    };
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    let productsDetails = await productsModel.findById(req.params.id);
    res.json(productsDetails);
  } catch {
    (err) => {
      res.status(err.status || 500);
      res.json({ Error: "Can not find any products" });
    };
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  const emailAlreadyExists = await User.findOne({ email: email });
  if (emailAlreadyExists) {
    return res.status(400).json("The email is already taken");
  }
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
