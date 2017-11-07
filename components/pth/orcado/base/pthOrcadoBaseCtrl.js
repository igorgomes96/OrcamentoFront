angular.module('orcamentoApp').controller('pthOrcadoBaseCtrl', ['$scope', 'menuService', 'funcionariosApi', function($scope, menuService, funcionariosApi) {

	var self = this;

	self.base = [];

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Base');


	var loadBase = function() {
		funcionariosApi.getFuncionariosInfo()
		.then(function(dado) {
			self.base = dado.data;
		});
	}

	loadBase();

}]);