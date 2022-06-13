const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"img/")
      },
      filename:(req, file, cb) => {
        cb(null, req.body.TenMon+"."+file.mimetype.split("/")[1])
      },
});
const upload= multer({storage:storage})
router.get('/LastID',hoaDonController.lastID);
router.post("/Create",upload.single('Image'),hoaDonController.create)
module.exports= router;