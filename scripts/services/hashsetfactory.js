'use strict';

// define a hash set here that can be used anywhere by dependency injection
angular.module('myApp')
	.factory('HashSetFactory', function () {
		var HashSet = {};

		HashSet.set = {};

		HashSet.add = function (key) {
			HashSet.set[key] = true;
		};

		HashSet.remove = function (key) {
			delete HashSet.set[key];
		};

		HashSet.clear = function () {
			HashSet.set = {};
		};

		HashSet.contains = function (key) {
			return HashSet.set.hasOwnProperty(key);
		};

		HashSet.isEmpty = function () {
			return jQuery.isEmptyObject(HashSet.set);
		};

		HashSet.size = function () {
			var size = 0;
			for( var key in HashSet.set ) {
				size++;
			}
			return size;
		}

		return HashSet;
	});