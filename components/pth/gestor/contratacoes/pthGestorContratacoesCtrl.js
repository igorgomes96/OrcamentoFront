angular.module('orcamentoApp').controller('pthGestorContratacoesCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Contratações');

}]);