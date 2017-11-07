angular.module('orcamentoApp').controller('filaSolicitacoesContratacoesOrcadoCtrl', ['filaSolicitacoesPthApi', function(filaSolicitacoesPthApi) {

	var self = this;

	var loadSolicitacoes = function() {
		filaSolicitacoesPthApi.getFilaSolicitacoesContratacoes()
		.then(function(dado) {
			console.log(dado.data);
			self.solicitacoes = dado.data;
		})
	}

	loadSolicitacoes();

}]);