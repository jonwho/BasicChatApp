// control modal

'use strict';

angular.module('myApp')
	.controller('ModalController', function($scope, $modal) {
		// private controller inside this controller to handle the modal instance
		var ModalInstanceCtrl = function ($scope, $modalInstance) {
			$scope.ok = function () {
				// expecting a result for close
				$modalInstance.close(true);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};

		$scope.open = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal.html',
				controller: ModalInstanceCtrl
			});

			modalInstance.result.then(function (val) {
				$scope.newval = val;
				console.log('success');
			}, function () {
				console.log('cancelled');
			});
		};
	});