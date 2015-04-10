// control modal opening on click

'use strict';

angular.module('myApp')
	.controller('ModalController', function($rootScope, $scope, $modal, ChatFactory, ShareFactory) {
		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: 'ModalInstanceController'
			});
			
			modalInstance.result.then(function (name) {
				var found = false;
				var length = ShareFactory.roomList.length;
				var index = 0;

				for(var i = 0; i < length; ++i) {
					if(ShareFactory.roomList[i].roomName === name) {
						found = true;
						index = i;
						console.log('index ' + index);
					}
				}

				if(!found) {
					ShareFactory.roomList.push({ roomName : name});
					index = ShareFactory.roomList.length - 1;
				}
				else {
					// don't care about disabled, not a feature i want to use
					//ShareFactory.roomList[index].disabled = false;
				}

				// Broadcast event to all children of rootScope
				// namely want RoomController to listen for this change
				$rootScope.$broadcast('RoomChange', index);
			}, function () {
				console.log('cancel');
			});
		};
	});