// make new chat instance to use

'use strict';

angular.module('myApp')
    .controller('ChatFactory', function($scope, $firebase) {
        var ref = new Firebase('https://playwithfire.firebaseIO.com/room');
    });