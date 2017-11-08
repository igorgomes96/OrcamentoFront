angular.module('orcamentoApp').controller('pthOrcadoAprovacoesCtrl', ['menuService', '$scope', 'pthOrcadoSolicitacoesApi', function(menuService, $scope, pthOrcadoSolicitacoesApi) {

	var self = this;

	self.contratacoes = [];
	self.reajustes = [];

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Aprovações');

	var loadSolicitacoesContratacoes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesContratacoes()
		.then(function(dado) {
			self.contratacoes = dado.data;
		})
	}

	var loadSolicitacoesReajustes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesReajustes()
		.then(function(dado) {
			self.reajustes = dado.data;
		})
	}

	self.aprovarContratacao = function(contratacao) {
		pthOrcadoSolicitacoesApi.postAprovarContratacaoOrcamento(contratacao)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesContratacoes();
		});
	}

	self.aprovarReajuste = function(reajuste) {
		pthOrcadoSolicitacoesApi.postAprovarReajusteOrcamento(reajuste)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesReajustes();
		});
	}

	loadSolicitacoesReajustes();
	loadSolicitacoesContratacoes();

	
}]);