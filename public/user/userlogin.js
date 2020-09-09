
angular.module('user',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/userprofile',{
        templateUrl: 'public/user/userlogin.html',
        Controller: 'userprofCtrl'
    })
}])

.controller('userprofCtrl', ['$scope','MainService',function($scope,MainService){

    $scope.MainService=MainService;
  $scope.name = $scope.MainService.selecteditem;

    $scope.uname="Kavya";
    $scope.email="kavyak123@gmail.com";

  
  //MainService.
  }])