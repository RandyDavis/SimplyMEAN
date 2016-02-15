var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs("mongodb://simplymeanuser:testing123@ds061385.mongolab.com:61385/simplymean", ["serviceClients"]);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/serviceClients', function (req, res) {
    db.serviceClients.find(function (err, docs) {
        res.json(docs);
    });
});

app.post('/serviceClients', function (req, res) {
    var svc = req.body;
    console.log(svc);

    db.serviceClients.insert(svc, function (err, doc) {
        res.json(doc);
    });
});

app.delete('/serviceClients/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.serviceClients.remove({_id : mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/serviceClients/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.serviceClients.findOne({ _id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/serviceClients/:id', function (req, res) {
    console.log(req.body);
    db.serviceClients.findAndModify(
        { _id: mongojs.ObjectId(id)},
        {$set: {name: req.body.name}},
        function (err, doc) {
            res.json(doc);
        }
    );
});

app.listen(3000);