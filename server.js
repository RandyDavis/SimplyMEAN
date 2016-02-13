var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/serviceClients', function (req, res) {
    var vm = this;
    var svc1 = {
        name: "linkedIn"
    };
    var svc2 = {
        name: "Rotten Tomatoes"
    };
    var svc3 = {
        name: "IMDB"
    };

    var serviceClients = [svc1, svc2, svc3];
    vm.serviceClients = serviceClients;
    res.json(serviceClients);
});

app.listen(3000);