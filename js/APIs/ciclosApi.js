angular.module('orcamentoApp').service('ciclosApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getCiclosOrcamento = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getCiclosOrcamento()});
		});
	}

	self.getCiclosReal = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getCiclosReal()});
		});
	}

	self.postCicloReal = function(ciclo) {
		return $q(function(resolve) {
			resolve({data: dataService.postCicloReal(ciclo)});
		});
	}

	self.postCicloOrcamento = function(ciclo) {
		return $q(function(resolve) {
			resolve({data: dataService.postCicloOrcamento(ciclo)});
		});
	}	


}]);