angular.module('orcamentoApp').service('crsApi', ['dataService', '$q', function(dataService, $q) {

	var self = this;

	self.getCRsUser = function() {
		return $q(function(resolve) {
			resolve({data: dataService.getCRsUser()});
		});
	}

	self.getValoresAbertosCR = function(cr) {
		return $q(function(resolve) {
			resolve({data: dataService.getValoresAbertosCR(cr)});
		});
	}



}]);