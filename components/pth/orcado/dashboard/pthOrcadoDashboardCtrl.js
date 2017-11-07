angular.module('orcamentoApp').controller('pthOrcadoDashboardCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Dashboard');
}]);