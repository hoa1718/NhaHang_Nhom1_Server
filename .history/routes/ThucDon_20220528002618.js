const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
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
router.get('/',thucDonController.index);
router.get('/',thucDonController.listNguyenLieu);
router.post('/Create',upload.single('Image'),thucDonController.create);
router.get('/Detail/:id',thucDonController.detail);
router.get('/Search/:keyword',thucDonController.search);
router.delete('/Delete/:id',thucDonController.destroy);
module.exports= router;