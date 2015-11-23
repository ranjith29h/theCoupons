// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

$ionicConfigProvider.tabs.position('bottom');

$stateProvider
      
              .state('home',{
                url:'/home',
                views:{
                  home:{
                    templateUrl:'template/home.html',
                    controller:'HomeCtrl'
                  }
                }
              })

              .state('coupon',{
                url:'/coupon',
                views:{
                  coupon:{
                    templateUrl:'template/coupon.html',
                    controller:'CouponCtrl'
                  }
                }
              })

              .state('deals',{
                url:'/deals',
                views:{
                  deals:{
                    templateUrl:'template/deals.html',
                    controller:'DealCtrl'
                  }
                }
              })

              .state('applist',{
                url:'/applist',
                views:{
                  applist:{
                    templateUrl:'template/app.html',
                    controller:'ApplCtrl'
                  }
                }
              })

              $urlRouterProvider.otherwise('/home');

})


.controller('HomeCtrl', function ($scope) {

  $scope.title = "theCoupons";
  console.log("home");

})

.controller('CouponCtrl', function ($scope) {

  $scope.title = "theCoupons";

  console.log("coupon");

})

.controller('DealCtrl', function ($scope) {
  $scope.title = "theCoupons";
  console.log("deals");
})

.controller('ApplCtrl', function ($scope) {
  $scope.title = "theCoupons";
  console.log("apps list");
})