angular.module('orcamentoApp').service('usuariosApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getUsuarios = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getUsuarios()});
		});
	}
}]);