angular.module('orcamentoApp').controller('pthRealAprovacoesCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Aprovações');

	
}]);