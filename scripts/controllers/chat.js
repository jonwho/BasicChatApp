// handle single chat instance

'use strict';

angular.module('myApp')
    .controller('ChatController', function($scope, $firebase, ShareFactory, HashSetFactory) {

        // get a parent ref
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        // get the room ref
        var roomRef = ref.child($scope.room.roomName);

        // users typing ref
        var usersTypingRef = roomRef.child('/users');
        var typeSync = $firebase(usersTypingRef);
        var typeSyncObject = typeSync.$asObject();

        // sync to a scope var $scope.hashSet
        typeSyncObject.$bindTo($scope, "hashSet.set");
        
        // hold messages for this room
        $scope.messages = $firebase(roomRef).$asArray();
        
        // for keyboard input
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }

        // for mouse input
        $scope.sendMessage = function () {
            if ($scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }
    });