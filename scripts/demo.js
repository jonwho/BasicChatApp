// demo that everyone uses first by default

'use strict';

angular.module('myApp')
    .controller('DemoController', function($scope, $firebase) {
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
        
        $scope.messages = $firebase(ref).$asArray();
        
        $scope.addMessage = function (e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                
                $scope.messages.$add({from: name, body: $scope.msg});
                
                $scope.msg = '';
            }
        }
    });