angular.module('orcamentoApp').controller('premissasAcordosCtrl', ['$scope', 'menuService', function($scope, menuService) {
	var self = this;

	$scope.menu = menuService.premissas.menu;
	menuService.premissas.activeByText('Acordos Coletivos');
}]);