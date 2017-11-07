angular.module('orcamentoApp').controller('premissasEncargosCtrl', ['$scope', 'menuService', function($scope, menuService) {
	var self = this;

	$scope.menu = menuService.premissas.menu;
	menuService.premissas.activeByText('Encargos');
}]);