angular.module('orcamentoApp').controller('pthGestorEventosCtrl', ['$scope', 'menuService', function($scope, menuService) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Eventos de Folha');
}]);