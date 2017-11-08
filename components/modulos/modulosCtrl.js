angular.module('orcamentoApp').controller('modulosCtrl', ['pthSolicitacoesApi', function(pthSolicitacoesApi) {

	var self = this;

	var loadQtdaSolicitacoes = function() {
		pthSolicitacoesApi.getQtdaSolicitacoesGestorTotal()
		.then(function(dado) {
			console.log(dado.data);
			self.qtdaSolicitacoes = dado.data;
		});
	}

	loadQtdaSolicitacoes();

}]);