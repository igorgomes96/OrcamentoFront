angular.module('orcamentoApp').controller('orcamentoValoresAbertosCtrl', ['crsApi', '$scope', 'dataService', function(crsApi, $scope, dataService) {

	var self = this;
	self.valoresAbertos = [];
	self.crAtual = null;

	self.meses = dataService.getMeses();

	var loadValoresAbertos = function(cr) {
		crsApi.getValoresAbertosCR(cr)
		.then(function(dado) {
			self.valoresAbertos = dado.data;
		});
	}

	self.salvar = function() {
		swal("Sucesso!", "As informações foram salvas!", "success");
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		self.crAtual = value;
		loadValoresAbertos(value);
	});


}]);