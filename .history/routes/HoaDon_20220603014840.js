const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");


router.get('/Ban',thanhToanController.listBan);

module.exports= router;