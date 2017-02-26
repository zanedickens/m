(function () {
	'use strict';

	angular
		.module('fixDesignApp')
		.controller('ShellController', ['getData', function (getData) {

			/* jshint validthis: true */
			var vm = this;
			vm.welcome = "Patient data loading..."

			vm.patientRecords = {};
			vm.patientGender = '';

			function retrieveData() {

				console.log('retrieveData started');

				getData.complete().then(function (response) {

					vm.patientRecords = response;
					vm.patientGender = vm.patientRecords.data.gender;
					vm.genderIcon = '/fixdesignapp/content/img/' + vm.patientGender + '-white.png';
					vm.welcome = vm.patientRecords.data.first_name + " " + vm.patientRecords.data.last_name;
					vm.show = 'patient';

				}, function (error) {
					vm.status = 'Unable to load data: ' + error.message;
				});
			}

			retrieveData();

		}]);
})();