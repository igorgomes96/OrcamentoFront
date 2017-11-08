angular.module('orcamentoApp').controller('subModulosPthCtrl', ['pthRealSolicitacoesApi', 'pthOrcadoSolicitacoesApi', function(pthRealSolicitacoesApi, pthOrcadoSolicitacoesApi) {

	var self = this;

	var loadQtdaSolicitacoes = function() {
		pthOrcadoSolicitacoesApi.getQtdaSolicitacoesGestorOrcado()
		.then(function(dado) {
			self.qtdaOrcado = dado.data;
		});

		pthRealSolicitacoesApi.getQtdaSolicitacoesGestorReal()
		.then(function(dado) {
			self.qtdaReal = dado.data;
		});
	}

	loadQtdaSolicitacoes();
	
}]);