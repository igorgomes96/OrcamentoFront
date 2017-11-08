angular.module('orcamentoApp').controller('pthGestorDesligamentosCtrl', ['menuService', '$scope', 'funcionariosApi', function(menuService, $scope, funcionariosApi) {

	var self = this;

	$scope.menu = menuService.pthGestor.menu;
	menuService.pthGestor.activeByText('Desligamentos');

	var loadDesligamentos = function() {
		funcionariosApi.getDesligamentos()
		.then(function(dado) {
			self.desligamentos = dado.data;
		});
	}

	loadDesligamentos();

	
}]);