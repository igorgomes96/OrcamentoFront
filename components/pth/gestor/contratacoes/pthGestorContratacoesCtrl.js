angular.module('orcamentoApp').controller('pthGestorContratacoesCtrl', ['$scope', 'menuService', 'pthRealSolicitacoesApi', function($scope, menuService, pthRealSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Contratações');

	var loadSolicitacoes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesContratacoes(true)
		.then(function(dado) {
			self.contratacoes = dado.data;
		});
	}

	loadSolicitacoes();

}]);