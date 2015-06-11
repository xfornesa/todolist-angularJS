(function(angular) {
    "use strict";
    angular
        .module('app', ['ngNewRouter', 'app.todo', 'app.salute'])
        .controller('AppController', AppController)
    ;

    AppController.$routeConfig = [
        {path: '/todo', component: 'todo'},
        {path: '/salute', component: 'salute'}
    ];

    function AppController() {
    }
})(angular);