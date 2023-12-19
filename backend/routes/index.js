const express= require('express');
const router = express.Router();

//! Diger rota dosyalarını içe aktarıyoruz.

const productRouter=require("./products.js")
const categoriRouter=require("./categories.js")
const authRouter=require("./auth.js")
const couponRouter = require("./coupon.js");

//Her rotayı ilgili yol altında kullanıyoruz.
router.use("/categories", categoriRouter);
router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/coupon", couponRouter);

module.exports = router;