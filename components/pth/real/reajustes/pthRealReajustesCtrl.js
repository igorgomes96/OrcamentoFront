angular.module('orcamentoApp').controller('pthRealReajustesCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Promoções');
}]);