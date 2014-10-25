// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($scope, $modal, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController',
			});
			
			modalInstance.result.then(function (roomName) {
				if(ShareFactory.roomList.indexOf(roomName) === -1) {
					ShareFactory.roomList.push(roomName);
				}
				else {
					// redirect to join room, which means set current tab.active to false
					// and new tab.active to true
				}
			}, function () {
				console.log('cancel');
			});
		};
	});