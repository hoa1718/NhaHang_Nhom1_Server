const express = require('express');
const router = express.Router();
const thanhToanController = require("../controllers/ThanhToan");
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"img/")
      },
});
const upload= multer({storage:storage})
router.get('/Ban',thanhToanController.listBan);
router.get('/Order',thanhToanController.listOrder);
router.post("/Create",upload.single('Image'),hoaDonController.create)
module.exports= router;