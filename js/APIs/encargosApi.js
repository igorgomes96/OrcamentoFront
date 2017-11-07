angular.module('orcamentoApp').service('encargosApi', ['dataService', '$q',function(dataService, $q) {

	var self = this;

	self.getEncargosEmpresa = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getEncargosEmpresa()});
		});
	}

	self.getEncargosFilial = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getEncargosFilial()});
		});
	}
	
}]);