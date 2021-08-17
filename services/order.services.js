var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');
var db = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");

router.get('/orders', function (req, res) {
    db.order.find(function (err, orddocs) {
        if (err) {
            res.send(err);
        }
        res.json(orddocs);
    });      
});

router.get('/custorders/:patid', function (req, res) {
    var id=req.params.patid;
    db.order.find({"PATID":id},{"PATID":0},function (err, orddocs) {
        if (err) {
            res.send(err);
        }
        res.json(orddocs);
    });      
});

module.exports = router;