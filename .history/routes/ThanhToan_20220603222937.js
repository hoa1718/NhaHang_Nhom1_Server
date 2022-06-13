const express = require('express');
const router = express.Router();
const thanhToanController = require("../controllers/ThanhToan");


router.get('/Ban',thanhToanController.listBan);
outer.post('/Create',hoaDonController.create);
module.exports= router;