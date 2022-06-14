const express = require('express');
const router = express.Router();

router.get("/",thanhToanController.findCustomer)
module.exports= router;