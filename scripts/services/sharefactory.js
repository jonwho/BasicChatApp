'use strict';

// just a quick way to share data between controllers
angular.module('myApp')
	.factory('ShareFactory', function (HashSetFactory) {
		var sharing = {};

		// hold room ids
		sharing.roomList = [
			{roomName : 'Demo', active : true}
		];

		sharing.HashSet = HashSetFactory;

		return sharing;
	});