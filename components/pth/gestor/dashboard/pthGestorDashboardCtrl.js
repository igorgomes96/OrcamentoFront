angular.module('orcamentoApp').controller('pthGestorDashboardCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Dashboard');
}]);