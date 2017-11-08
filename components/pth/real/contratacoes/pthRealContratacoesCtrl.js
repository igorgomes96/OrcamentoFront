angular.module('orcamentoApp').controller('pthRealContratacoesCtrl', ['$scope', 'menuService', 'pthRealSolicitacoesApi', function($scope, menuService, pthRealSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Contratações');

	var loadSolicitacoes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesContratacoes(true)
		.then(function(dado) {
			self.contratacoes = dado.data;
		});
	}

	loadSolicitacoes();

}]);