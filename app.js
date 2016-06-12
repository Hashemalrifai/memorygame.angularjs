var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
          template: '<memory-game></memory-game>'
        }).
        when('/about/', {
          template: '<about></about>'
        }).
        when('/github/', {
          template: '<github></github>'
        }).
        otherwise('/home');
}])

