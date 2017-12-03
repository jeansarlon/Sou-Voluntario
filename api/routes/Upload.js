var express = require('express');
var ctrlUpload = require('../controllers/Upload');
var router = express.Router();

router.get('/uploadImage', function (req, res, next) {
    res.send('Upload de imagem');
});

router.post('/uploadImage', ctrlUpload.upload.single('image'), function (req, res, next) {
    console.log("success");
    console.log("body: ", req.body);
    console.log(req.file);
    res.status(204).end();
});

module.exports = router;