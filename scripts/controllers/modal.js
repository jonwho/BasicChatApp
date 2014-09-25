// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($scope, $modal, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController'
			});
			
			modalInstance.result.then(function (roomName) {
				console.log('success');
				ShareFactory.roomList.push(roomName);
			}, function () {
				console.log('cancel');
			});
		};
	});