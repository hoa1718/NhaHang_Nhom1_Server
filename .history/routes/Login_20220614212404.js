const express = require('express');
const router = express.Router();
const loginController = require("../controllers/Login");

router.get("/",loginController.findCustomer)
module.exports= router;