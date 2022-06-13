const express = require('express');
const router = express.Router();
const thanhToanController = require("../controllers/ThanhToan");


router.get('/Ban',thanhToanController.listBan);
router.get('/Ban',thanhToanController.listBan);

module.exports= router;