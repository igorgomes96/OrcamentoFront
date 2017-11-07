angular.module('orcamentoApp').service('pthOrcadoSolicitacoesApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getPthOrcadoSolicitacoesContratacoes = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getPthOrcadoSolicitacoesContratacoes()});
		});
	}

	self.getPthOrcadoSolicitacoesReajustes = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getPthOrcadoSolicitacoesReajustes()});
		});
	}

}]);