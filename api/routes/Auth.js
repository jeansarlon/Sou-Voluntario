var express = require('express');
var ctrlAuth = require('../controllers/Auth');

var router = express.Router();
router.post('/login', ctrlAuth.login);
router.get('/login', function(req, res){
    res.send('login');
});

module.exports = router;