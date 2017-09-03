'use strict';
 
angular.module('checkout', ['ngRoute'])
 
.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
    
  $locationProvider.html5Mode(true); 
}])
 
.controller('CheckoutCtrl', ['$scope','CommonProp',function($scope,CommonProp) {
    $scope.items = CommonProp.getItems();   
    $scope.total = CommonProp.getTotal();
}]);