// handle single chat instance

'use strict';

angular.module('myApp')
    .controller('ChatController', function($scope, $firebase, ShareFactory) {
        console.log('roomName: ' + $scope.room.roomName);
        console.log('roomIndex: ' + $scope.$index);

        // get a parent ref
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        // get the room ref
        var newRoomRef = ref.child($scope.room.roomName);
        
        // hold messages for this room
        $scope.messages = $firebase(newRoomRef).$asArray();
        
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }
    });