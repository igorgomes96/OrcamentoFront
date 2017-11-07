angular.module('orcamentoApp').service('contratacoesApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getContratacoes = function(cr) {
		return $q(function(resolve) {
			resolve({data: dataService.getContratacoes(cr)});
		});
	}

	self.postContratacao = function(contratacao) {
		return $q(function(resolve) {
			resolve({data: dataService.postContratacao(contratacao)});
		});
	}

	self.deleteContratacao = function(codigo) {
		return $q(function(resolve) {
			resolve({data: dataService.deleteContratacao(codigo)});
		});
	}

}]);	