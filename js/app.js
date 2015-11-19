
var productApp = angular.module('productApp', []);
productApp.controller('mainCtrl', function($scope, $http) {
	/* Fields to display */
	$scope.dataField = ["first_name", "last_name", "email", "country", "ip_address", "state", "city", "street_address"];

	$scope.reviewsFetch = function(){
		/* Fetch data in JSon format */
		$http.get("data/customer.json").success(function(data, status, headers, config) {
			/* set data into scope variables */
			$scope.list=data;
			$scope.customer=$scope.list[0];
			// console.log($scope.list);
		}).error(function(data, status, headers, config) {
			// console.log('error');
		});
	}

	$scope.viewCustomer = function($index){
		/* onclick event for customer items */
		$scope.customer=$scope.list[$index];
	}

	/* Initial execute */
	$scope.reviewsFetch();
});