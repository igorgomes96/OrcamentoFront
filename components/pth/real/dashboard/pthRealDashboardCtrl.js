angular.module('orcamentoApp').controller('pthRealDashboardCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Dashboard');
}]);