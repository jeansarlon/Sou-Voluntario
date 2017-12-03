var express = require('express');
var ctrlUpload = require('../controllers/Upload');
var ctrlVoluntary = require('../controllers/Voluntary');

var router = express.Router();
router.post('/voluntary', ctrlUpload.upload.single('image'),  ctrlVoluntary.create);
router.get('/voluntary', ctrlVoluntary.getAll);
router.get('/voluntary/:_id', ctrlVoluntary.get);
router.delete('/voluntary/:_id', ctrlVoluntary.delete);
router.put('/voluntary/:_id', ctrlVoluntary.update);
router.get('/voluntary/:_id/opportunities', ctrlVoluntary.getOpportunitiesOfVoluntary);
router.put('/voluntary/:_id/photo', ctrlUpload.upload.single('image'),  ctrlVoluntary.updatePhoto);


module.exports = router;