const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");
//Yeni bir ürün oluşturma(Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});


// Tüm ürünleri getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Belirli ürünü getirme (Read- single)
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    try {
      const product = await Product.findById(productId);

      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Product not fount." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
