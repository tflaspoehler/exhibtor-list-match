directoryApp = angular.module("directoryApp", ['ngRoute'])

//-----------------------------------------------------------------------//
// change scope templating string to insert angular stuff from ${} to    //
//       without this hubspot will not play nice with angular            //
//-----------------------------------------------------------------------//
.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('//');
	$interpolateProvider.endSymbol('//');
}])
//-------------------------------------------------------------------//

//----------------------------------//
//  service to get http requests    //
//----------------------------------//
.service('getRequest', ['$http', function($http) {
	var getData = function(request, parms={}) {
		return $http.get(request, {params: parms, cache: 'true' }).then(function(response) {
			return response.data;
		});
	};
	return {
		getData: getData
	};
}])
//----------------------------------//

//-----------------------------------------------------------------------//
//      controller to sends AJAX request and returns it to the view      //
//-----------------------------------------------------------------------//
.controller("directoryController", ['$scope', 'getRequest', function directoryController($scope, getRequest) {

	var vm = this;

	// get employee information from WEM database
	getRequest.getData("https://wem.americasmart.com/api/EmployeeDirectory?byDep").then(function(employees) {
	});
}]);
//-----------------------------------------------------------------------//
