angular.module('orcamentoApp').controller('pthRealReajustesCtrl', ['$scope', 'menuService', 'pthRealSolicitacoesApi', function($scope, menuService, pthRealSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Promoções');

	var loadSolicitacoesReajustes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesReajustes(true)
		.then(function(dado) {
			self.reajustes = dado.data;
		});
	}

	

	loadSolicitacoesReajustes();
}]);