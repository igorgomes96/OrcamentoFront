angular.module('orcamentoApp').service('cargosApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getCargos = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getCargos()});
		});
	}

	self.getCargosSalarios = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getCargosSalarios()});
		});
	}
}]);