angular.module('ShoppingCart',[
    'ngRoute',
    'cart',
    'Checkout',
    'item',

    'user'
    
])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}])




.service('MainService', function(){
    var selecteditem = "";
    
    this.removeCanvas= function(){
        $('canvas').remove();
        
    }

    var AddToCartItems = [];
    var AddtoWishlistitems = [];

    

});
