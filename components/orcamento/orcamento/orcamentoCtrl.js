angular.module('orcamentoApp').controller('orcamentoCtrl', ['menuService', 'crsApi', '$scope', function(menuService, crsApi, $scope) {

	var self = this;

	$scope.menu = menuService.orcamento.menu;
	menuService.orcamento.activeByText('Orçamento');

	var loadCRsUser = function() {
		crsApi.getCRsUser()
		.then(function(dado) {
			self.crs = dado.data;
		});
	}

	$scope.$watch('crSelecionado', function() {
		$scope.$broadcast('crOrcamentoChanged', $scope.crSelecionado);
	});

	loadCRsUser();
}]);