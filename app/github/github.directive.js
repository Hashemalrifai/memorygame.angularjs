angular.module('app').
    directive('github', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/github/github.htm'
        }
    });