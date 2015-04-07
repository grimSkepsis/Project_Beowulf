var app=angular.module('beo-app',['ngRoute','ngAnimate']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'templates/home.html'
          })
          .when('/contact',{
                templateUrl: 'templates/contact.html'
          })
          .when('/projects',{
                templateUrl: 'templates/projects.html'
          })
          .when('/studio',{
                templateUrl: 'templates/studio.html'
          })
          .when('/careers',{
                templateUrl: 'templates/careers.html'
          });
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
  //menu selection stuff
  $scope.menuSelectArray= [false, false, false, false];
  var mSelectArray = $scope.menuSelectArray;
  $scope.unselectMenu = function(){
    for(var i = 0; i < mSelectArray.length; i++){
      mSelectArray[i] = false;
    }
  };
  //selects menu items, also closes menu if its open in mobile mode
  $scope.selectMenuItem = function(num){
    if(mSelectArray[num] === false){
      $scope.unselectMenu();
      mSelectArray[num] = true;
      $scope.menuOpen = false;
    }

  };


});
