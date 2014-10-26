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

        // sync to a scope var $scope.users
        typeSyncObject.$bindTo($scope, "users").then(function() {
            $scope.users.list = [];
        });
        
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
            var name = $scope.name || 'anonymous';
            if($scope.msg.length >= 1) {
                $scope.users.list.push({user : name});
            }
            else {
                var index = $scope.users.list.indexOf(name);
                $scope.users.list.splice(index, 1);
            }
        }

        // listen for change on $scope.msg
        $scope.$watch('msg', function(newVal, oldVal) {
            var name = $scope.name || 'anonymous';
            if($scope.msg === undefined) {
                // do nothing
            }
            else if($scope.msg.length >= 1) {
                $scope.users.list.push({user : name});
            }
            else {
                var index = $scope.users.list.indexOf(name);
                $scope.users.list.splice(index, 1);
            }
        });  
    });