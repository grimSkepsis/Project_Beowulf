var app=angular.module('beo-app',['ngRoute','ngAnimate']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          });
      //     .when('/about',{
      //           templateUrl: 'about.html'
      //     });
});





app.controller('beoController',function($scope, $timeout){
  //logo animation
  $scope.hovered = false;
  $scope.logohover = function(){
    $scope.hovered = true;
    $timeout(function(){$scope.hovered = false;},800,true);
  };
  //hamburger menu stuffs
  $scope.menuOpen = false;
  $scope.toggleMenu = function(){
    $scope.menuOpen = !$scope.menuOpen;
  };



});
