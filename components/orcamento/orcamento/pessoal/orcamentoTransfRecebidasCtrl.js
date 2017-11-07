angular.module('orcamentoApp').controller('orcamentoTransfRecebidasCtrl', ['transferenciasApi', '$scope', function(transferenciasApi, $scope) {

	var self = this;

	self.transfRecebidas = [];

	var loadTransfRecebidas = function(cr) {
		transferenciasApi.getTransferenciasRecebidas(cr)
		.then(function(dado) {
			self.transfRecebidas =  dado.data;
		});
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		loadTransfRecebidas(value);
	});


}]);