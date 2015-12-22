(function () {
	var dM = angular.module('rtdb.dir');

	dM.directive('tableTitle', [function(){
		return {
			scope: {
				headerdib: '@'
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.tableheader = $scope.headerdib;
				console.log('what is $scope.headerdib : '+$scope.headerdib);
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/components/table-title.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();