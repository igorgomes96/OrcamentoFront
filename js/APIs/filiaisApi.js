angular.module('orcamentoApp').service('filiaisApi', ['dataService', '$q', function(dataService, $q) {
	var self = this;

	this.getFiliais = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getFiliais()});
		});
	}
}]);