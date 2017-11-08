angular.module('orcamentoApp').service('empresasApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getEmpresas = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getEmpresas()});
		});
	}

}]);