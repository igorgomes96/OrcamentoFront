angular.module('orcamentoApp').controller('filaSolicitacoesAprovacoesOrcadoCtrl', ['menuService', '$scope', 'pthOrcadoSolicitacoesApi', function(menuService, $scope, pthOrcadoSolicitacoesApi) {

	var self = this;

	$scope.menu = menuService.pthOrcado.menu;
	menuService.pthOrcado.activeByText('Aprovações');

	var loadSolicitacoesContratacoes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesContratacoes()
		.then(function(dado) {
			self.contratacoes = dado.data;
		})
	}

	var loadSolicitacoesReajustes = function() {
		pthOrcadoSolicitacoesApi.getPthOrcadoSolicitacoesReajustes()
		.then(function(dado) {
			self.reajustes = dado.data;
		})
	}

	loadSolicitacoesReajustes();
	loadSolicitacoesContratacoes();

	
}]);