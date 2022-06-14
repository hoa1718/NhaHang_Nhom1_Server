const express = require('express');
const router = express.Router();
const loginController = require("../controllers/HoaDon");

router.get("/",thanhToanController.findCustomer)
module.exports= router;