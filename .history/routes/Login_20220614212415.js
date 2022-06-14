const express = require('express');
const router = express.Router();
const loginController = require("../controllers/Login");

router.get("/",loginController.handleLogin)
module.exports= router;