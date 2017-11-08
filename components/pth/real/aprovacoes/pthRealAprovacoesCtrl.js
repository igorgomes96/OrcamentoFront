angular.module('orcamentoApp').controller('pthRealAprovacoesCtrl', ['menuService', '$scope', 'pthRealSolicitacoesApi', function(menuService, $scope, pthRealSolicitacoesApi) {

	var self = this;

	self.contratacoes = [];
	self.reajustes = [];

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Aprovações');

	var loadSolicitacoesContratacoes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesContratacoes()
		.then(function(dado) {
			self.contratacoes = dado.data;
		})
	}

	var loadSolicitacoesReajustes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesReajustes()
		.then(function(dado) {
			self.reajustes = dado.data;
		})
	}

	self.aprovarContratacao = function(contratacao) {
		pthRealSolicitacoesApi.postAprovarContratacaoOrcamento(contratacao)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesContratacoes();
		});
	}

	self.aprovarReajuste = function(reajuste) {
		pthRealSolicitacoesApi.postAprovarReajusteOrcamento(reajuste)
		.then(function(dado) {
			swal('Sucesso!', 'Solciitação aprovada com sucesso!', 'success');
			loadSolicitacoesReajustes();
		});
	}

	loadSolicitacoesReajustes();
	loadSolicitacoesContratacoes();
	
}]);