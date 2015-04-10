// control which rooms to show

'use strict';

angular.module('myApp')
    .controller('RoomController', function($scope, ShareFactory) {
        $scope.roomList = ShareFactory.roomList;

        // use this to default to index 0 in roomList
        $scope.selectedIndex = 0;

        var selected = null;
        var previous = null;

        $scope.$on('RoomChange', function(event, data) {
        	$scope.selectedIndex = data;
        	console.log('Heard the change!');
        	console.log('The data is: ' + data);
        });
    });