var express = require('express');
var ctrlUpload = require('../controllers/Upload');
var ctrlOrganization = require('../controllers/Organization');

var router = express.Router();
router.post('/organization', ctrlUpload.upload.single('image'), ctrlOrganization.create);
router.get('/organization/page/:page', ctrlOrganization.getAll);
router.get('/organization/:_id', ctrlOrganization.get);
router.get('/organization/:_id/opportunities', ctrlOrganization.getOpportunitiesOfOrganization);
router.delete('/organization/:_id', ctrlOrganization.delete);
router.put('/organization/:_id', ctrlOrganization.update);
router.get('/search/organization/', ctrlOrganization.search);
router.put('/organization/:_id/photo', ctrlUpload.upload.single('image'),  ctrlOrganization.updatePhoto);


module.exports = router;