angular.module('orcamentoApp').controller('premissasEncargosEmpresaCtrl', ['encargosApi', function(encargosApi) {

	var self = this;
	self.encargos = [];

	var loadEncargos = function() {
		encargosApi.getEncargosEmpresa()
		.then(function(dado) {
			self.encargos = dado.data;
		});
	}

	loadEncargos();
}]);