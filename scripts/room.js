// control which rooms to show

'use strict';

angular.module('myApp')
    .controller('RoomController', function($scope, ShareFactory) {
        $scope.roomList = ShareFactory.roomList;
    });