'use strict';

// define a hash set here that can be used anywhere by dependency injection
angular.module('myApp')
	.factory('HashSetFactory', function () {
		var HashSet = function () {
			var set = {};

			this.add = function (key) {
				set[key] = true;
			};

			this.remove = function (key) {
				delete set[key];
			};

			this.clear = function () {
				set = {};
			};

			this.contains = function (key) {
				return set.hasOwnProperty(key);
			};

			this.isEmpty = function () {
				return jQuery.isEmptyObject(set);
			};

			this.size = function () {
				var size = 0;
				for( var key in set ) {
					size++;
				}
				return size;
			}
		};

		return HashSet;
	});