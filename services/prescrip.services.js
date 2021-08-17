var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');

var db = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");

router.get('/prescriptions', function (req, res) {
    db.prescription.find(function (err, predocs) {
        if (err) {
            res.send(err);
        }
        res.json(predocs);
    });
});

router.get('/prescriptions/:patid', function (req, res) {
    var id = req.params.patid;
    db.prescription.find({"PATIENTID":id},{"PATIENTID":0},function (err, predocs) {
        if (err) {
            res.send(err);
        }
        res.json(predocs);
    });
});

router.get('/docprescrip/:docid', function (req, res) {
    var id = req.params.docid;
    db.prescription.find({"DOCTORID":id},{"DOCTORID":0},function (err, predocs) {
        if (err) {
            res.send(err);
        }
        res.json(predocs);
    });
});

module.exports = router;