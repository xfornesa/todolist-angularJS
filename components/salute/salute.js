(function(angular) {
    "use strict";
    angular
        .module('app.salute', [])
        .controller('SaluteController', SaluteController)
    ;

    function SaluteController() {
        var vm = this;

        // initialize
        init();

        function init() {
            vm.greeting = 'Hello world!';
        }
    }
})(angular);