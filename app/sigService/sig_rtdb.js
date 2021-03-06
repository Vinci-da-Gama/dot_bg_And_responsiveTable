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
				console.log("sigSrevice error line -- 34 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
			})
			.finally(function () {
				console.log('This is finally headers anyway.');
			});
		};
	}]);

	sigM.service('tableContentRequire', ['$http', function($http){
		// var contentsAisle = "./db/rtdb-table-content.json";
		var contentsAisle = "https://api.myjson.com/bins/5a2p3";

		this.grabTableContent = function (cbTableContent) {
			$http.get(contentsAisle)
			.then(function (testimony) {
				cbTableContent(testimony.data);
				console.log('what is the table content? ', testimony.data);
			})
			.catch(function (data, config, status) {
				console.log("sigSrevice error line -- 52 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
			})
			.finally(function () {
				console.log('This is finally content anyway.');
			});
		};

	}]);

})();