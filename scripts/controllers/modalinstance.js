// control what happens in the actual modal instance

'use strict';

angular.module('myApp')
    .controller('ModalInstanceController', function($scope, $modalInstance) {
    	$scope.data = {
    		roomName: ""
    	};
        
        $scope.ok = function () {
            $modalInstance.close($scope.data.roomName);
        };
        
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });