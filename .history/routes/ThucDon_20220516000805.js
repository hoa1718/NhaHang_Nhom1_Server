const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");

router.get('/',thucDonController.index);
router.get('/Create',thucDonController.index);

module.exports= router;