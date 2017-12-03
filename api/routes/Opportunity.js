var express = require('express');
var ctrlUpload = require('../controllers/Upload');
var ctrlOpportunity = require('../controllers/Opportunity');

var router = express.Router();
router
.post('/opportunity', ctrlUpload.upload.single('image'), ctrlOpportunity.create)
.put('/opportunity/:_id', ctrlOpportunity.update)
.delete('/opportunity/:_id', ctrlOpportunity.delete)
.get('/opportunity/:_id', ctrlOpportunity.get)
.get('/opportunity/page/:page', ctrlOpportunity.getAll)
.post('/opportunity/:_id/evaluations', ctrlOpportunity.insertEvaluation)
.post('/opportunity/:_id/volunteers', ctrlOpportunity.insertVoluntary)
.delete('/opportunity/:_id/volunteers/:id_voluntary', ctrlOpportunity.removeVoluntary)
.get('/search/opportunity', ctrlOpportunity.search);


module.exports = router;