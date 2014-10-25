// make new chat instance to use

'use strict';

angular.module('myApp')
    .factory('ChatFactory', function($scope, $firebase) {
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');

        // check if the room name exists, if not make that room with the room name
    });