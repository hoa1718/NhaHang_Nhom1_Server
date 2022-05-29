const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const upload = multer.diskStorage({})
router.get('/',thucDonController.index);
router.post('/Create',upload,thucDonController.create);

module.exports= router;