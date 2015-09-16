angular.module('rot13')
    .directive('rot13', function () {
        return {
            restrict: 'E',
            templateUrl: 'rot13.html'
        };
    });