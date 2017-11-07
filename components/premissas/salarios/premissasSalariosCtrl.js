angular.module('orcamentoApp').controller('premissasSalariosCtrl', ['$scope', 'menuService', 'cargosApi', function($scope, menuService, cargosApi) {
	var self = this;

	$scope.menu = menuService.premissas.menu;
	menuService.premissas.activeByText('Salários');
	self.salarios = [];

	var loadSalarios = function() {
		cargosApi.getCargosSalarios()
		.then(function(dado) {
			self.salarios = dado.data;
		});
	}

	loadSalarios();
}]);