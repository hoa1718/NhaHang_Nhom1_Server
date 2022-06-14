const express = require('express');
const router = express.Router();

router.get("/Customer/:id",thanhToanController.findCustomer)
module.exports= router;