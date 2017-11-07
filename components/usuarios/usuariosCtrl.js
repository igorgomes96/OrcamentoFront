angular.module('orcamentoApp').controller('usuariosCtrl', ['usuariosApi', function(usuariosApi) {

	var self = this;

	var loadUsuarios = function() {
		usuariosApi.getUsuarios()
		.then(function(dado) {
			self.usuarios = dado.data;
		});
	}

	loadUsuarios();
}]);	
