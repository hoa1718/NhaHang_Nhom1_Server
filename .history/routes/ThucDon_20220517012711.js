const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb('../img')
      },
      filename:(req, file, cb) => {
        cb(null, file.originalname)
      },
});
const upload= multer({storage:storage})
router.get('/',thucDonController.index);
router.post('/Create',upload.any('Image'),thucDonController.create);

module.exports= router;