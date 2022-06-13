const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");

router.get('/',thucDonController.index);
router.post('/Create',thucDonController.create);

module.exports= router;