var app = angular.module('app');

app.directive('memoryGame', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/home/game.htm',
        controller: 'gameController'
    };
});