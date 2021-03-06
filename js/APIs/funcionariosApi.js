angular.module('orcamentoApp').service('funcionariosApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getFuncionariosInfo = function(cr) {
		return $q(function(resolve) {
			resolve({data: dataService.getFuncionariosInfo(cr)});
		});
	}

	self.getFuncionario = function(matricula) {
		return $q(function(resolve) {
			resolve({data: dataService.getFuncionario(matricula)});
		});
	}

	self.getDesligamentos = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getDesligamentos()});
		});
	}
}]);