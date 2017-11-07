angular.module('orcamentoApp').controller('orcamentoTransfEnviadasCtrl', ['transferenciasApi', '$scope', function(transferenciasApi, $scope) {

	var self = this;

	self.transfEnviadas = [];

	var loadTransfEnviadas = function(cr) {
		transferenciasApi.getTransferenciasEnviadas(cr)
		.then(function(dado) {
			self.transfEnviadas =  dado.data;
		});
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		loadTransfEnviadas(value);
	});


}]);