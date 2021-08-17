var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');
var db = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");

router.get('/getorderdetails/:id', function (req, res) {
    var id = req.params.id;
    db.orderdetails.find({ ORDERID: id }, { "ORDERID":0,"_id": 0 }, function (err, orddocs) {
        if (err) {
            res.send(err);
        }
        res.send(orddocs);
    });
});

router.get('/getpredetails/:id', function (req, res) {
    var id = req.params.id;
    db.prescriptiondetails.find({ PRESCID: id }, { "PRESCID":0,"_id": 0 }, function (err, predocs) {
        if (err) {
            res.send(err);
        }
        res.send(predocs);
    });
});

module.exports = router;