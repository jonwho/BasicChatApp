// handle single chat instance

'use strict';

angular.module('myApp')
    .controller('ChatController', function($scope, $firebase, ShareFactory) {

        // get a parent ref
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        // get the room ref
        var roomRef = ref.child($scope.room.roomName);

        // users typing ref
        var usersTypingRef = roomRef.child('/users');
        var typeSync = $firebase(usersTypingRef);
        var typeSyncObject = typeSync.$asObject();
        // sync to a scope var $scope.users
        typeSyncObject.$bindTo($scope, "users");
        
        // hold messages for this room
        $scope.messages = $firebase(roomRef).$asArray();
        
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }

        // called with ng-change so when msg value is changed this method is called
        $scope.updateTypeChange = function () {
            if($scope.users === null || $scope.users === undefined)
                $scope.users = 0;
            if($scope.msg.length >= 1)
                $scope.users += 1;
            else
                $scope.users -= 1;
        }    
    });