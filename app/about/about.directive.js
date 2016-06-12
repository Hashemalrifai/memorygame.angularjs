angular.module('app').
    directive('about', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/about/about.htm'
        }
    });