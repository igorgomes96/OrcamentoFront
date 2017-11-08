angular.module('orcamentoApp').controller('orcamentoPessoalBaseCtrl', ['funcionariosApi', 'transferenciasApi', '$scope', 'dataService', 'cargosApi', function(funcionariosApi, transferenciasApi,$scope, dataService, cargosApi) {

	var self = this;

	self.aba = 'Dados';
	self.funcionarios = [];
	self.desligamentos = [];
	self.meses = dataService.getMeses();
	self.cargos = [];
	self.filiais = [];

	var loadDesligamentos = function() {
		funcionariosApi.getDesligamentos()
		.then(function(dado) {
			self.desligamentos = dado.data;
		});
	}

	self.loadFuncionariosInfo = function(cr) {
		funcionariosApi.getFuncionariosInfo(cr)
		.then(function(dado) {
			self.funcionarios = dado.data;
			console.log(self.funcionarios);
		});
	}

	self.saveTransferencia = function(funcionario, transf) {
		funcionariosApi.getFuncionario(funcionario.Matricula)
		funcionario.CodigoCR = transf.CRDestino;
		funcionario.DataInicioCR = transf.MesTransferencia;
		transferenciasApi.postTransferencia(funcionario)
		.then(function() {
			self.loadFuncionariosInfo(self.crAtual);
		});
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
	loadDesligamentos();
}]);