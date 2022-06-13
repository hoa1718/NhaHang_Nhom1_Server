const express = require('express');
const router = express.Router();
const hoaDonController = require("../controllers/HoaDon");
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"img/")
      },
});
const upload= multer({storage:storage})
router.get('/LastID',hoaDonController.lastID);
router.post("/Create",upload.single('Image'),hoaDonController.create)
module.exports= router;