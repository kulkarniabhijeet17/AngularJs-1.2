var app = angular.module('gridApp', [ 'ngGrid' ]);
app.controller('GridCtrl', function($scope) {
	$scope.gridOptions = {
		data : 'gridData',
		showFooter : false,
		columnDefs : [ {
			field : 'name',
			displayName : 'Name'
		}, {
			field : 'age',
			displayName : 'Age'
		} ]
	};

	$scope.gridData = [ {
		name : "Abhijeet",
		age : 25
	}, {
		name : "Vrinda",
		age : 8
	}, {
		name : "Dhruv",
		age : 11
	}, {
		name : "Purva",
		age : 6
	}, {
		name : "Kavya",
		age : 1
	} ];
});