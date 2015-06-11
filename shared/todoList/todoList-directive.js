(function(angular) {
    "use strict";

    angular.
        module('app')
        .directive('mtTodoList', mtTodoList)
    ;

    function mtTodoList() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                tasks: '='
            },
            templateUrl: '/shared/todoList/partials/todo-list.html',
            controller: mtTodoListController,
            controllerAs: 'ctrl'
        }
    }

    function mtTodoListController($scope) {
        var vm = this;

        // initialize
        init();

        function init() {
            vm.tasksLength = 0;
        }

        $scope.$watch('tasks', function(newValue){
            vm.tasksLength = newValue.length;
        }, true);
    }

})(angular);