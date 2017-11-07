angular.module('orcamentoApp').controller('premissasBeneficiosCtrl', ['$scope', 'menuService', function($scope, menuService) {
	var self = this;

	$scope.menu = menuService.premissas.menu;
	menuService.premissas.activeByText('Benefícios');
}]);