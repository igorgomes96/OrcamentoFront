angular.module('orcamentoApp').controller('pthRealBaseCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Base');
}]);