var express = require('express');
var router = express.Router();// to create api routes
router.get('/', function (req, res) {
     res.render('index.html');   
});
module.exports = router;