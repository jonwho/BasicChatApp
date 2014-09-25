'use strict';

// just a quick way to share data between controllers
angular.module('myApp')
    .factory('ShareFactory', function () {
       var sharing = {};
       
       // hold room ids
       sharing.roomList = [];

       // remove later
       sharing.roomList.push('0');
       sharing.roomList.push('1');

       return sharing;
    });