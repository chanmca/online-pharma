var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');
var db = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");

router.get('/inventories', function (req, res) {
    db.inventory.find(function (err, drugdocs) {
        if (err) {
            res.send(err);
        }
        res.json(drugdocs);
    });      
});

router.get('/inventories/:id',function(req,res){
    var id=req.params.id;
    db.inventory.findOne({"DRUGID":id},function(err,drugdoc){
        if(err){
            res.send(err);
        }
        res.json(drugdoc)
    });
});

router.get('/inventname/:name',function(req,res){
    var name=req.params.name;
    db.inventory.find({"DRUGNAME":name},function(err,drugdoc){
        if(err){
            res.send(err);
        }
        res.json(drugdoc)
    });
});

router.get('/inventcat/:cat',function(req,res){
    var cat=req.params.cat;
    db.inventory.find({"CATEGORY":cat},function(err,drugdoc){
        if(err){
            res.send(err);
        }
        res.json(drugdoc)
    });
});

router.get('/inventcount', function (req, res) {
    db.inventory.find().count(function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });      
});
router.post('/insertdrug', function (req, res) {
    var drug = req.body;
    db.inventory.save(drug, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

module.exports = router;

/*
router.post('/insertdrug', function (req, res) {
    var drug = req.body;
    db.inventory.save(drug, function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log("1 document inserted");
    });
});
router.get('/inventids/:cat',function(req,res){
    var cat=req.params.cat;
    db.inventory.find({"CATEGORY":cat},{"DRUGID":1,"_id":0},function(err,IDdocS){
        if(err){
            res.send(err);
        }
        res.json(IDdocS)
    });
});

*/