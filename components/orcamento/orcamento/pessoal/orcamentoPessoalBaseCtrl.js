angular.module('orcamentoApp').controller('orcamentoPessoalBaseCtrl', ['funcionariosApi', 'transferenciasApi', '$scope', 'dataService', 'cargosApi', function(funcionariosApi, transferenciasApi,$scope, dataService, cargosApi) {

	var self = this;

	self.aba = 'Dados';
	self.funcionarios = [];
	self.meses = dataService.getMeses();
	self.cargos = [];
	self.filiais = [];

	self.loadFuncionariosInfo = function(cr) {
		funcionariosApi.getFuncionariosInfo(cr)
		.then(function(dado) {
			self.funcionarios = dado.data;
		});
	}

	self.saveTransferencia = function(funcionario, transf) {
		funcionario.CodigoCR = transf.CRDestino;
		funcionario.DataInicioCR = transf.MesTransferencia;
		transferenciasApi.postTransferencia(funcionario);
	}

	var loadCargos = function() {
		cargosApi.getCargos()
		.then(function(dado) {
			self.cargos = dado.data;
		});
	}

	self.transferir = function(funcionario) {
		self.funcionarioTransf = angular.copy(funcionario);
	}

	self.salvar = function() {
		swal("Sucesso!", "As informações foram salvas!", "success");
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		self.crAtual = value;
		self.loadFuncionariosInfo(value);
	});
	
	loadCargos();
}]);