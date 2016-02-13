(function () {
    'use strict';

    angular.module('app', [])
        .controller('ServicesCtrl', ServicesCtrl)

    ServicesCtrl.$inject = ['$http']
    function ServicesCtrl ($http) {
        var vm = this;
        vm.message = "hello from controller";

        var renderServiceClients = function (response) {
            vm.serviceClients = response;
        }

        // get all
        $http.get('/serviceClients')
            .success(renderServiceClients);
    }

})();