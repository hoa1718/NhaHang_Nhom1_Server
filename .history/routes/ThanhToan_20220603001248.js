const express = require('express');
const router = express.Router();
const thanhToanController = require("../controllers/ThanhToan");


router.get('/Ban',thanhToanController.index);

module.exports= router;