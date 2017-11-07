angular.module('orcamentoApp').controller('pthOrcadoReajustesCtrl', ['menuService', '$scope', 'pthOrcadoSolicitacoesApi', function(menuService, $scope, pthOrcadoSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Promoções');

	var loadSolicitacoesReajustes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesReajustes(true)
		.then(function(dado) {
			self.reajustes = dado.data;
		})
	}

	loadSolicitacoesReajustes();

	
}]);