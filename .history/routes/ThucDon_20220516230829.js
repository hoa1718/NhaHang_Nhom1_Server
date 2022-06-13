const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const multer.memoryStorage()storage = ;
const upload = multer({ storage: storage }).single('file');
router.get('/',thucDonController.index);
router.post('/Create',upload,thucDonController.create);

module.exports= router;