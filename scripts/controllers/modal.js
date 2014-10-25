// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($scope, $modal, ChatFactory, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController',
			});
			
			modalInstance.result.then(function (roomName) {
				var isValid = ChatFactory.validRoom(roomName);

				// if not valid then make the room
				ChatFactory.makeRoom(isValid, roomName);

				// room exists but not in roomList then add it to list
				if(ShareFactory.roomList.indexOf(roomName) === -1 && isValid) {
					ShareFactory.roomList.push(roomName);
				}
				// room in list so redirect to it
				else {
					// redirect to join room, which means set current tab.active to false
					// and new tab.active to true
				}
			}, function () {
				console.log('cancel');
			});
		};
	});