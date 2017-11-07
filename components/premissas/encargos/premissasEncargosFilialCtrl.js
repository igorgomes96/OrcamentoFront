angular.module('orcamentoApp').controller('premissasEncargosFilialCtrl', ['encargosApi', function(encargosApi) {

	var self = this;
	self.encargos = [];

	var loadEncargos = function() {
		encargosApi.getEncargosFilial()
		.then(function(dado) {
			self.encargos = dado.data;
		});
	}

	loadEncargos();
}]);