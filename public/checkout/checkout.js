angular.module('Checkout',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/checkout',{
        templateUrl: 'public/checkout/checkout.html',
        Controller: 'CheckoutCtrl'
    });
}])

.controller('CheckoutCtrl', ['$scope','MainService', function($scope,MainService){
    $scope.MainService = MainService;

    $scope.ClearCanvas = function(){
                
        $scope.MainService.removeCanvas();
        
      }

      $scope.AddToCartItems = $scope.MainService.AddToCartItems;
      $scope.AddtoWishlistitems=$scope.MainService.AddtoWishlistitems;


      




}])


