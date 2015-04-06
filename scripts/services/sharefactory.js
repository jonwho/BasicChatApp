'use strict';

// just a quick way to share data between controllers
angular.module('myApp')
	.factory('ShareFactory', function (HashSetFactory) {
		var sharing = {};

		// hold room ids
		sharing.roomList = [
			{roomName : 'Demo'},
			{roomName : 'Demo 2'}
		];

		sharing.currentRoomName = 'Demo';

		sharing.HashSet = HashSetFactory;

		return sharing;
	});