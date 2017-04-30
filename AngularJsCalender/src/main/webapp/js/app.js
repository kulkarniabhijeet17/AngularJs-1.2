var app = angular.module('calenderApp', [ 'calenderApp.directives' ]);

app.controller('CalenderCtrl', function($scope) {
	$scope.myText = 'Not Selected';
	$scope.currentDate = '';
	$scope.updateMyText = function(date) {
		$scope.myText = 'Selected';
	};
});