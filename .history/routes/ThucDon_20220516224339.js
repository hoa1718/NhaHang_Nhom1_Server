const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
router.get('/',thucDonController.index);
router.post('/Create',thucDonController.create);

module.exports= router;