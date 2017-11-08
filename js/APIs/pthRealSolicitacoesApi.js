angular.module('orcamentoApp').service('pthRealSolicitacoesApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getPthRealSolicitacoesContratacoes = function(aprovado) {
		return $q(function(resolve) {
			resolve({data: dataService.getPthRealSolicitacoesContratacoes(aprovado)});
		});
	}

	self.getPthRealSolicitacoesReajustes = function(aprovado) {
		return $q(function(resolve) {
			resolve({data: dataService.getPthRealSolicitacoesReajustes(aprovado)});
		});
	}

	self.getQtdaSolicitacoesGestorReal = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getQtdaSolicitacoesGestorReal()});
		});
	}

	self.postPthRealSolicitacoesContratacoes = function(contratacao) {
		return $q(function(resolve) {
			resolve({data: dataService.postPthRealSolicitacoesContratacoes(contratacao)});
		});
	}

	self.postPthRealSolicitacoesPromocoes = function(promocao) {
		return $q(function(resolve) {
			resolve({data: dataService.postPthRealSolicitacoesPromocoes(promocao)});
		});
	}

	self.postAprovarContratacaoReal = function(contratacao) {
		return $q(function(resolve) {
			resolve({data: dataService.aprovarContratacaoReal(contratacao)});
		});
	}

	self.postAprovarReajusteReal = function(reajuste) {
		return $q(function(resolve) {
			resolve({data: dataService.aprovarReajusteReal(reajuste)});
		});
	}
	

}]);