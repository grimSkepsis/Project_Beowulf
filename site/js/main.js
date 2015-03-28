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





app.controller('beoController',function($scope){

    /*
    Here you can handle controller for specific route as well.
    */
});
// app.addclass('.logo', '.logo-hover', function() {
//   return {
//     animate : function(element, className, from, to, done) {
//       //styles
//     }
//   }
// });
