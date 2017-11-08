angular.module('orcamentoApp').controller('pthRealBaseCtrl', ['$scope', 'menuService', 'funcionariosApi', function($scope, menuService, funcionariosApi) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Base');

	var loadBase = function() {
		funcionariosApi.getFuncionariosInfo()
		.then(function(dado) {
			self.base = dado.data;
		});
	}

	loadBase();


}]);