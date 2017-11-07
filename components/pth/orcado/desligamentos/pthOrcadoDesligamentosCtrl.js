angular.module('orcamentoApp').controller('pthOrcadoDesligamentosCtrl', ['menuService', '$scope', 'funcionariosApi', function(menuService, $scope, funcionariosApi) {

	var self = this;
	self.desligamentos = [];

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Desligamentos');


	var loadDesligamentos = function() {
		funcionariosApi.getDesligamentos()
		.then(function(dado) {
			self.desligamentos = dado.data;
		});
	}

	loadDesligamentos();	
	
}]);