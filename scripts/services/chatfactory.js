// make new chat instance to use

'use strict';

angular.module('myApp')
	.factory('ChatFactory', function($firebase) {
		// add properties to chatAPI
		var chatAPI = {};

		var ref = new Firebase('https://playwithfire.firebaseIO.com/room');

		// return true if room exists
		// return false if room does not exist
		chatAPI.checkRoom = function (roomName) {
			// check if the room name exists
			ref.child(roomName).once('value', function(snapshot) {
				if(snapshot.val() === null) {
					// no such room exists
					return false;
				}
				else {
					// room exists
					return true;
				}
			});
		};

		// if room does not exist then make the room
		// no using this method right now
		chatAPI.makeRoom = function (validRoom, roomName) {
			if(!validRoom) {
				ref.child(roomName);
			}
		};

		return chatAPI;
	});