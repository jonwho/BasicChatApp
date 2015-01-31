'use strict';

angular.module('myApp')
    .controller('HelpController', function($scope, $modal) {
    	$scope.open = function() {
    		var helpInstance = $modal.open({
    			templateUrl: 'views/help.html'
    		});
    	};
    });