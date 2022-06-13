const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/ThanhToan");


router.get('/Ban',thanhToanController.listBan);

module.exports= router;