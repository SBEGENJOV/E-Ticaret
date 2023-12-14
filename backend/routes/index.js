const express= require('express');
const router = express.Router();

//! Diger rota dosyalarını içe aktarıyoruz.

const productRouter=require("./products.js")
const categoriRouter=require("./categories.js")

//Her rotayı ilgili yol altında kullanıyoruz.
router.use("/categories", categoriRouter);
router.use("/products", productRouter);

module.exports = router;