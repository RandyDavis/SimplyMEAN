(function () {
    'use strict';

    angular.module('app', [])
        .controller('ServicesCtrl', ServicesCtrl)

    ServicesCtrl.$inject = ['$http'];
    function ServicesCtrl ($http) {
        var vm = this;
        vm.message = "hello from controller";
        vm.renderServiceClients = renderServiceClients;
        vm.create = create;

        function renderServiceClients (response) {
            vm.serviceClients = response;
        }

        function create () {
            console.log(vm.serviceClient);
            $http.post('/serviceClients', vm.serviceClient)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                })
        }

        // get all
        $http.get('/serviceClients')
            .success(vm.renderServiceClients);

    }

})();