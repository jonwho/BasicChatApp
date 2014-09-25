// handle single chat instance

'use strict';

angular.module('myApp')
    .controller('ChatController', function($scope, $firebase) {
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        var newRoomRef = ref.push('roomname');
        
        $scope.messages = $firebase(newRoomRef).$asArray();
        
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }
    });