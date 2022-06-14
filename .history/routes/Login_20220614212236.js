const express = require('express');
const router = express.Router();

router.get("/Login",thanhToanController.findCustomer)
module.exports= router;