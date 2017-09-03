'use strict';
 
 
angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'
]).
config([ '$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
    
    
    $locationProvider.html5Mode(true); 
    
}]);