angular.module('orcamentoApp').service('transferenciasApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getTransferenciasRecebidas = function(cr) {
		return $q(function(resolve) {
			resolve({data: dataService.getTransferenciasRecebidas(cr)});
		});
	}

	self.getTransferenciasEnviadas = function(cr) {
		return $q(function(resolve) {
			resolve({data: dataService.getTransferenciasEnviadas(cr)});
		});
	}

	self.postTransferencia = function(transf) {
		return $q(function(resolve) {
			resolve({data: dataService.postTransferencia(transf)});
		});
	}

	self.aprovarTransferencia = function(transf) {
		return $q(function(resolve) {
			resolve({data: dataService.aprovarTransferencia(transf)});
		});
	}

	self.reprovarTransferencia = function(transf) {
		return $q(function(resolve) {
			resolve({data: dataService.reprovarTransferencia(transf)});
		});
	}


}]);