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
				// not in roomList then add it to list
				if(ShareFactory.roomList.indexOf(name) === -1) {
					ShareFactory.roomList.push({ roomName : name, active : true });
				}
			}, function () {
				console.log('cancel');
			});
		};
	});