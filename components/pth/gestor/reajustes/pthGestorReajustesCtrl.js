angular.module('orcamentoApp').controller('pthGestorReajustesCtrl', ['$scope', 'menuService', 'pthRealSolicitacoesApi', function($scope, menuService, pthRealSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Promoções');

	var loadSolicitacoesReajustes = function() {
		pthRealSolicitacoesApi.getPthRealSolicitacoesReajustes(true)
		.then(function(dado) {
			self.reajustes = dado.data;
		});
	}

	

	loadSolicitacoesReajustes();
}]);