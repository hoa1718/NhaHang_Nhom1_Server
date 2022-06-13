const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');
router.get('/',thucDonController.index);
router.post('/Create',uplpathucDonController.create);

module.exports= router;