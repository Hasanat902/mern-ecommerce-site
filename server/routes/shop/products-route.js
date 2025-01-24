const express = require("express");
const {
  getFilteredProducts,
} = require("../../controllers/shop/shop-controllers");

const router = express.Router();

router.get("/get", getFilteredProducts);

module.exports = router;
