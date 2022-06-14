const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");

router.get("/",thanhToanController.findCustomer)
module.exports= router;