// control what happens in the actual modal instance

'use strict';

angular.module('myApp')
    .controller('ModalInstanceController', function($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close($scope.roomName);
        };
        
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });