(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['rtdb.router', 'rtdb.ctrl'];
	var cons = ['rtdb.constant'];
	var serv = ['rtdb.sig.service', 'rtdb.service'];
	var dir = ['rtdb.dir', 'rtdb.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* rtdb Module
	*
	* The main module of this application...
	*/
	angular.module('rtdb', depedencyArr);

	angular.module('rtdb.router', ['ui.router']);
	angular.module('rtdb.constant', []);
	angular.module('rtdb.sig.service', []);
	angular.module('rtdb.service', []);
	angular.module('rtdb.ctrl', []);
	angular.module('rtdb.dir', ['rtdb.service', 'rtdb.sig.service']);
	angular.module('rtdb.cust.dir', ['rtdb.service', 'rtdb.sig.service']);

})();
(function () {
	var rM = angular.module('rtdb.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('p1', {
			url: '/p1',
			templateUrl: './partials/responsive-table-unseen.html',
			controller: 'p1Ctrl'
		})
		.state('p2', {
			url: '/p2',
			templateUrl: './partials/responsive-flipscroll-table.html',
			controller: 'p2Ctrl'
		})
		.state('p3', {
			url: '/p3',
			templateUrl: './partials/responsive-directionChange-table.html',
			controller: 'p3Ctrl'
		})

	}]);

})();
(function () {
	var cosM = angular.module('rtdb.constant');

})();
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
(function () {
	var cdM = angular.module('rtdb.cust.dir');

	cdM.directive('responsiveTableUnseen', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, tableHeaderRequire) {
				// tableHeaderRequire.graspTableHeaders
				tableHeaderRequire.graspTableHeaders(retriveData);
				function retriveData (dossier) {
					$scope.tableHeaders = dossier.headerdata;
					console.log('$scope.tableHeaders : -- ', $scope.tableHeaders);
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
			controller: function($scope, $element, $attrs, $transclude) {},
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
			controller: function($scope, $element, $attrs, $transclude) {},
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
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('rtdb.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var sigM = angular.module('rtdb.sig.service');

	sigM.service('tableHeaderRequire', ['$http', function($http){
		var headerAisle = "https://api.myjson.com/bins/ty1b";

		this.graspTableHeaders = function (cbTableHeader) {
			$http.get(headerAisle)
			.then(function (testimony) {
				cbTableHeader(testimony.data);
				// console.log('what is the testimony? --> ', testimony.data);
			})
			.catch(function (data, config, status) {
				console.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
			})
			.finally(function () {
				console.log('This is finally anyway.');
			});
		};
	}]);

})();
// jQuery Js Document
$(document).ready(function() {
	// notice ();
});

/*function notice () {
	alert('pls, disable this function.');
}*/