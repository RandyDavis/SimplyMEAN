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
        vm.all = all;
        vm.remove = remove;

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
            vm.all();
        }

        // get all
        function all () {
            $http.get('/serviceClients')
                .success(vm.renderServiceClients);
        }

        // delete
        function remove (id) {
            $http.delete('/serviceClients/' + id)
                .then(function (response) {
                    vm.all();
                    console.log(id);
                })
                .catch(function(error) {
                    console.log(error);
                })

        }

        vm.all();

    }

})();