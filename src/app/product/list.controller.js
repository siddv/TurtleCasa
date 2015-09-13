'use strict';

angular.module('turtle')
  .controller('ListCtrl', function ($scope, $stateParams, $rootScope, $state) {

    $rootScope.list = angular.fromJson(decodeURIComponent($stateParams.listName));
    console.log('schpe Lstname: ',$stateParams.listName);
    //$scope.listName = $state.listName;

    $scope.close = function(index){
      console.log(index);

      $scope.list.items.splice(index,1);
    };

    $scope.goToBasket = function(){
      $state.go('basket');
    };
  });
