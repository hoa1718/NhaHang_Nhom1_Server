const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");


router.get('/LastID',hoaDonController.lastID);
router.post('/Create',hoaDonController.lastcID);

module.exports= router;