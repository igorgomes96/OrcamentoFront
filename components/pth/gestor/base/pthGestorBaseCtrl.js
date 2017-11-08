angular.module('orcamentoApp').controller('pthGestorBaseCtrl', ['$scope', 'menuService', 'funcionariosApi', function($scope, menuService, funcionariosApi) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Base');

	var loadBase = function() {
		funcionariosApi.getFuncionariosInfo()
		.then(function(dado) {
			self.base = dado.data;
		});
	}

	loadBase();


}]);