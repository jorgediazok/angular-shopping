const { Router } = require("express");
const router = Router();
const productsModel = require("../models/Products");

router.get("/", async (req, res) => {
  try {
    let products = await productsModel.find({});
    res.json(products);
  } catch {
    (err) => {
      res.status(err.status || 500);
      res.json({ Error: "Can not find any products" });
    };
  }
});

router.get("/:id", async (req, res) => {
  try {
    let products = await productsModel.findById(req.params.id);
    res.json(products);
  } catch {
    (err) => {
      res.status(err.status || 500);
      res.json({ Error: "Can not find any products" });
    };
  }
});

module.exports = router;
