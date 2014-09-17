angular.module('myApp')
	.controller('MyController', function($scope, $firebase) {
		var ref = new Firebase("https://playwithfire.firebaseIO.com/");
		$scope.messages = $firebase(ref).$asArray();

		//ADD MESSAGE METHOD
		$scope.addMessage = function(e) {

			//LISTEN FOR RETURN KEY
			if (e.keyCode === 13 && $scope.msg) {
				//ALLOW CUSTOM OR ANONYMOUS USER NAMES
				var name = $scope.name || 'anonymous';

				// add msg
				$scope.messages.$add({from: name, body: $scope.msg});

				//RESET MESSAGE
				$scope.msg = "";
			}
		}
	});