angular.module('orcamentoApp').controller('pthRealEventosCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Eventos de Folha');
}]);