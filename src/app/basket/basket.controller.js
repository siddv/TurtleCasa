'use strict';

angular.module('turtle')
  .controller('BasketCtrl', function ($scope, $window) {
    $scope.showSummary=false;

    $scope.goToCheckout = function(){
      $window.location.href = '/';
    }
  });
