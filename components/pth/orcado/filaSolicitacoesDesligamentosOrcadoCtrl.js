angular.module('orcamentoApp').controller('filaSolicitacoesDesligamentosOrcadoCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Desligamentos');

	
}]);