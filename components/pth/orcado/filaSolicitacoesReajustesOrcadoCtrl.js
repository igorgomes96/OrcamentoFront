angular.module('orcamentoApp').controller('filaSolicitacoesReajustesOrcadoCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Promoções');

	
}]);