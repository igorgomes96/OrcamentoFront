angular.module('orcamentoApp').controller('pthGestorDesligamentosCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Desligamentos');

	
}]);