// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($scope, $modal, ChatFactory, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController',
			});
			
			modalInstance.result.then(function (name) {
				// looks like don't need this
				//var isValid = ChatFactory.checkRoom(name);

				// if not valid then make the room
				// may be don't need this method
				// ChatFactory.makeRoom(isValid, name);

				// not in roomList then add it to list
				if(ShareFactory.roomList.indexOf(name) === -1) {
					ShareFactory.roomList.push({ roomName : name, active : true });
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