angular.module('orcamentoApp').controller('pthRealContratacoesCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Contratações');

}]);