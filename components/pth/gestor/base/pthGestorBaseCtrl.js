angular.module('orcamentoApp').controller('pthGestorBaseCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Base');
}]);