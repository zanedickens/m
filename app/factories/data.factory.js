(function () {
	'use strict';

	angular
		.module('fixDesignApp')
		.factory('getData', ['$http', function ($http) {

				// Search Query
				var query = '';

				// Variables
				var getData = {};

				getData.complete = complete;

				//
				function complete() {
					return $http.get("https://www.mockaroo.com/16e87360/download?count=1&key=e27814e0")
				};
				return getData;
				}
		]);
})();