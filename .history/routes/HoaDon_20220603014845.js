const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");


router.get('/Ban',hoaDonController.listBan);

module.exports= router;