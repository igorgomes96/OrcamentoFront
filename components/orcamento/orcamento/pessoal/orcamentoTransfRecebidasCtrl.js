angular.module('orcamentoApp').controller('orcamentoTransfRecebidasCtrl', ['transferenciasApi', '$scope', function(transferenciasApi, $scope) {

	var self = this;
	self.crAtual = null;

	self.transfRecebidas = [];

	var loadTransfRecebidas = function(cr) {
		transferenciasApi.getTransferenciasRecebidas(cr)
		.then(function(dado) {
			self.transfRecebidas =  dado.data;
		});
	}

	self.aprovarTransf = function(transf) {
		transferenciasApi.aprovarTransferencia(transf)
		.then(function() {
			swal('Sucesso!', 'Transferência Aprovada!', 'success');
			loadTransfRecebidas(self.crAtual);
		});
	}

	self.reprovarTransf = function(transf) {
		transferenciasApi.reprovarTransferencia(transf)
		.then(function() {
			swal('Sucesso!', 'Transferência Reprovada!', 'success');
			loadTransfRecebidas(self.crAtual);
		});
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		self.crAtual = value;
		if (value)
			loadTransfRecebidas(value);
	});


}]);