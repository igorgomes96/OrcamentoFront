angular.module('orcamentoApp').controller('pthRealDesligamentosCtrl', ['menuService', '$scope', 'funcionariosApi', function(menuService, $scope, funcionariosApi) {

	var self = this;

	$scope.menu = menuService.pthReal.menu;
	menuService.pthReal.activeByText('Desligamentos');

	var loadDesligamentos = function() {
		funcionariosApi.getDesligamentos()
		.then(function(dado) {
			self.desligamentos = dado.data;
		});
	}

	loadDesligamentos();

	
}]);