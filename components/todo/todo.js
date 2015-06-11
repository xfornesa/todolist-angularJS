(function(angular) {
    "use strict";
    angular
        .module('app.todo', [])
        .controller('TodoController', TodoController)
    ;

    function TodoController(ListService) {
        var vm = this;

        // behaviours
        vm.addNewTask = addNewTask;

        // initialize
        init();

        function init() {
            vm.newTask = '';
            refresh();
        }

        function addNewTask() {
            ListService.addTask(vm.newTask);
            refresh();
            vm.newTask = '';
        }

        function refresh() {
            vm.tasks = ListService.getList();
        }
    }
})(angular);