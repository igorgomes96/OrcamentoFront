angular.module('orcamentoApp').controller('filaSolicitacoesContratacoesOrcadoCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Contratações');

	

}]);