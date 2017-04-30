var app = angular.module('fileUploadApp', [ 'fileUploadApp.directives' ]);

app.controller('FileUploadCtrl', function($scope) {
	$scope.uploadFinished = function(e, data) {
		console.log('We just finished uploading this baby...');
	};
});