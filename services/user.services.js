var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');
var Q = require('q');
var db = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");
router.get('/user/:id', function (req, res) {
    var id = req.params.id;
    db.user.findOne({ "USERID": id },{"PASSWORD":0,"POSTADDRESS":0,"_id":0},function (err, pharmadoc) {
        if (err) {
            res.send(err);
        }
        res.json(pharmadoc)
    });
});
router.get('/authenticate/:eid/:pswd', function (req, res) {
    var eid = req.params.eid;
    var pswd = req.params.pswd;
    db.user.find({'$and':[{"EMAILD":eid,"PASSWORD":pswd}]},{"PASSWORD":0,"POSTADDRESS":0,"_id":0},function(err,user){
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});
router.get('/contacts/:cat', function (req, res) {
    var category = req.params.cat;
    db.user.find({ "CATEGORY": category }, { "PASSWORD": 0 }, function (err, contactdocs) {
        if (err) {
            res.send(err);
        }
        res.json(contactdocs)
    });
});
module.exports = router;





/*router.get('/authenticate/:eid/:pswd',function(req,res){
    var deferred = Q.defer();
    var eid=req.params.eid;
    var pswd=req.params.pswd;
    db.user.find({'$and': [{"EMAILD":eid},{"PASSWORD":pswd }]},{"PASSWORD":0,"_id":0},function(err,userdoc){
        if(err){
            res.send(err);
        }
        res.json(userdoc)
    });
     var deferred = Q.defer();
 if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // authentication successful
            deferred.resolve({
                userid: user.USERID,
                username: user.USERNAME,
                category: user.CATEGORY,
                age: user.AGE,
                sex: user.SEX,
                phone: user.PHONE,
                emailid: user.EMAILD,
                registereddate: user.REGISTEREDDATE,
                status: user.STATUS
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });
    return deferred.promise;
    

    
});*/