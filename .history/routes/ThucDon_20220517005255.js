const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../img')
      },
      filename: (req, file, cb) => {
        cb(null,  file.originalname.split(".")[1])
      },
});
const upload= multer({storage:storage})
router.get('/',thucDonController.index);
router.post('/Create',upload.single('file'),thucDonController.create);

module.exports= router;