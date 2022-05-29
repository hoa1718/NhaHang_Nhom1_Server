const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const upload = multer.diskStorage({
    destination:(req,file,res)=>{
        res(null,'../img')
    },
    filename:(req,file,res)=>{
        res(null,req.body.TenMon)
    }
});
router.get('/',thucDonController.index);
router.post('/Create',upload,thucDonController.create);

module.exports= router;