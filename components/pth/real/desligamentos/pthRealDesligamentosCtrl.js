angular.module('orcamentoApp').controller('pthRealDesligamentosCtrl', ['menuService', '$scope', function(menuService, $scope) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Desligamentos');

	
}]);