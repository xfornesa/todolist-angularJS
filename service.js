(function(angular){
    "use strict";
    angular
        .module('app')
        .service('ListService', ListService)
    ;

    function ListService() {
        var vm = this;

        vm.tasks = [];

        return {
            getList: getList,
            addTask: addTask
        };

        function getList() {
            return vm.tasks;
        }

        function addTask(task) {
            vm.tasks.push(task);
        }
    }
})(angular);