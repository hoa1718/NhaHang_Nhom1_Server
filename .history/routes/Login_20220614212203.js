const express = require('express');
const router = express.Router();
const loginController = require("../controllers/Login");
const multer = require('multer');

router.get('/Ban',thanhToanController.listBan);
router.get('/Order',thanhToanController.listOrder);
router.post("/Save",upload.single('Image'),thanhToanController.saveOrder)
router.get("/Delete/:id",thanhToanController.deleteOrder)
router.get("/Customer/:id",thanhToanController.findCustomer)
module.exports= router;