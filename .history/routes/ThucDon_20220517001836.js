const express = require('express');
const router = express.Router();
const thucDonController = require("../controllers/ThucDon");
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,res)=>{
        res(null,'../img')
    },
    filename:(req,file,res)=>{
        res(null,)
    }
});
var upload= multer({storage:storage})
router.get('/',thucDonController.index);
router.post('/Create',upload.single('Image'),thucDonController.create);

module.exports= router;