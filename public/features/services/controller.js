(function () {
    'use strict';

    angular.module('app', [])
        .controller('ServicesCtrl', ServicesCtrl)

    function ServicesCtrl () {
        var vm = this;
        vm.message = "hello from controller";

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
    }

})();