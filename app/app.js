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