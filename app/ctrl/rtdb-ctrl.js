(function () {
	var ctrlM = angular.module('rtdb.ctrl');

	ctrlM.controller('p1Ctrl', ['$scope', function($scope){
		console.log('This is p1Ctrl');
	}]);

	ctrlM.controller('p2Ctrl', ['$scope', function($scope){
		console.log('This is p2Ctrl');
	}]);

	ctrlM.controller('p3Ctrl', ['$scope', function($scope){
		console.log('This is p3Ctrl');
	}]);

})();