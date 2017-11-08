angular.module('orcamentoApp').service('pthSolicitacoesApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getQtdaSolicitacoesGestorTotal = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getQtdaSolicitacoesGestorTotal()});
		});
	}

}]);