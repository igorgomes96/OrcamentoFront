angular.module('orcamentoApp').controller('pthGestorReajustesCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Promoções');
}]);