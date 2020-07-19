const { Router } = require("express");
const router = Router();
const productsModel = require("../models/Products");

router.get("/", async (req, res) => {
  let products = await productsModel.find({});
  res.json(products);
});

router.get("/:id", (req, res) => {});

module.exports = router;
