(function () {
	var cdM = angular.module('rtdb.cust.dir');

	cdM.directive('responsiveTableUnseen', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, tableHeaderRequire, tableContentRequire) {
				// tableHeaderRequire.graspTableHeaders
				tableHeaderRequire.graspTableHeaders(retriveData);
				function retriveData (dossier) {
					$scope.tableHeaders = dossier.headerdata;
					console.log('$scope.tableHeaders : -- ', $scope.tableHeaders);
				};

				tableContentRequire.grabTableContent(retriveContent);
				function retriveContent (dossier) {
					$scope.tableContent = dossier;
				};

			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/responsive-table-unseen.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

	cdM.directive('responsiveFlipscrollTable', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, tableHeaderRequire, tableContentRequire) {
				tableHeaderRequire.graspTableHeaders(flipScrollHeader);
				function flipScrollHeader (dossier) {
					$scope.tableHeaders = dossier.headerdata;
				};

				tableContentRequire.grabTableContent(fipScrollContent);
				function fipScrollContent (dossier) {
					$scope.tableContent = dossier;
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/responsive-flipscroll-table.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

	cdM.directive('responsiveDirectionChangeTable', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, tableHeaderRequire, tableContentRequire) {
				tableHeaderRequire.graspTableHeaders(flipScrollHeader);
				function flipScrollHeader (dossier) {
					$scope.tableHeaders = dossier.headerdata;
				};

				tableContentRequire.grabTableContent(fipScrollContent);
				function fipScrollContent (dossier) {
					$scope.tableContent = dossier;
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/responsive-directionChange-table.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);


})();