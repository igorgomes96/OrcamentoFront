angular.module('orcamentoApp').service('pthOrcadoSolicitacoesApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getPthOrcadoSolicitacoesContratacoes = function(aprovado) {
		return $q(function(resolve) {
			resolve({data: dataService.getPthOrcadoSolicitacoesContratacoes(aprovado)});
		});
	}

	self.getPthOrcadoSolicitacoesReajustes = function(aprovado) {
		return $q(function(resolve) {
			resolve({data: dataService.getPthOrcadoSolicitacoesReajustes(aprovado)});
		});
	}

	self.getQtdaSolicitacoesGestorOrcado = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getQtdaSolicitacoesGestorOrcado()});
		});
	}

	self.postAprovarContratacaoOrcamento = function(contratacao) {
		return $q(function(resolve) {
			resolve({data: dataService.aprovarContratacaoOrcamento(contratacao)});
		});
	}

	self.postAprovarReajusteOrcamento = function(reajuste) {
		return $q(function(resolve) {
			resolve({data: dataService.aprovarReajusteOrcamento(reajuste)});
		});
	}

}]);