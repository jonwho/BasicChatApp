'use strict';

// just a quick way to share data between controllers
angular.module('myApp')
    .factory('ShareFactory', function () {
       var sharing = {};
       
       return sharing;
    });