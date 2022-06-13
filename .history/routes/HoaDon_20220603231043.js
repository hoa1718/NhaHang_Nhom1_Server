const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");
const { route } = require('./ThanhToan');


router.get('/LastID',hoaDonController.lastID);
route.ge
module.exports= router;