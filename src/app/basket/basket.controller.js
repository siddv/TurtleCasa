'use strict';

angular.module('turtle')
  .controller('BasketCtrl', function ($scope, $stateParams) {

    $scope.list = angular.fromJson(decodeURIComponent($stateParams.listName));
    console.log('schpe Lstname: ',$stateParams.listName);
    //$scope.listName = $state.listName;

    $scope.close = function(index){
      console.log(index);

      $scope.list.items.splice(2,1);
    }

  });
