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