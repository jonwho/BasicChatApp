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

        //$scope.hashSet = ShareFactory.HashSet;

        // sync to a scope var $scope.hashSet
        typeSyncObject.$bindTo($scope, "hashSet.set");
        
        // hold messages for this room
        $scope.messages = $firebase(roomRef).$asArray();
        
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }

        // listen for change on $scope.msg
        // $scope.$watch('msg', function(newVal, oldVal) {
        //     var name = $scope.name || 'anonymous';
        //     $scope.hashSet = HashSetFactory;
        //     if($scope.msg === undefined) {
        //         // do nothing
        //     }
        //     else if($scope.msg.length >= 1) {
        //         $scope.hashSet.add(name);
        //     }
        //     else {
        //         $scope.hashSet.remove(name);
        //     }
        // });  
    });