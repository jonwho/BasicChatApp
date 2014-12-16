'use strict';

// just a quick way to share data between controllers
angular.module('myApp')
	.factory('ShareFactory', function (HashSetFactory) {
		var sharing = {};

		// hold room ids
		sharing.roomList = [
			{roomName : 'Demo', active : true},
			{roomName : 'Demo 2'}
		];

		sharing.HashSet = HashSetFactory;

		return sharing;
	});