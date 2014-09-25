// handle single chat instance

'use strict';

angular.module('myApp')
    .controller('ChatController', function($scope, $firebase, ShareFactory) {
        // get a parent ref
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        // make new child ref
        var newRoomRef = ref.push();

        // get the endpoint name
        var roomId = newRoomRef.name();

        ShareFactory.roomList.push(roomId);
        
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