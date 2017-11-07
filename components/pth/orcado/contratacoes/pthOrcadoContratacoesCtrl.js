angular.module('orcamentoApp').controller('pthOrcadoContratacoesCtrl', ['menuService', '$scope', 'pthOrcadoSolicitacoesApi', function(menuService, $scope, pthOrcadoSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Contratações');	


	var loadSolicitacoes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesContratacoes(true)
		.then(function(dado) {
			self.contratacoes = dado.data;
		});
	}

	loadSolicitacoes();

	
}]);