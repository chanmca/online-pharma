var express = require('express');
var router = express.Router();// to create api routes
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = mongojs("mongodb://dummyUser:dummy123@dummy.mlab.com:71065/dummmydb");
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useMongoClient: true });

//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/getorderdetails/:id', function (req, res) {
    var id = req.params.id;
    db.orderdetails.find({ ORDERID: id }, { "ORDERID": 0, "_id": 0 }, function (err, orddocs) {
        if (err) {
            res.send(err);
        }
        res.send(orddocs);
    });
});

module.exports = router;

/*


var inventSchema = new mongoose.Schema({
    DRUGID: String,
    DRUGNAME: String,
    CATEGORY: String,
    COMPANY: String,
    SUPPLIER: String,
    QUANTITY: Number,
    PERUNIT: Number,
    UNIT: String,
    COST: Number,
    STATUS:Number,
    DOS: Date,
    DOE: Date,
    DESCRIPTION: String
});

var inventory = mongoose.model("inventory", inventSchema);

router.post('/insertdrug', function (req, res) {
    var inventData = new inventory(req.body);
    console.log(inventData);
    inventData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
router.post('/insertdrug', function (req, res) {
    var drug = req.body;
    db.inventory.save(drug, function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log("1 document inserted");
    });
});
app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

*/