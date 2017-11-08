angular.module('orcamentoApp').controller('orcamentoPessoalContratacoesCtrl', ['filiaisApi', '$scope', 'dataService', 'cargosApi', 'contratacoesApi', function(filiaisApi, $scope, dataService, cargosApi, contratacoesApi) {

	var self = this;
	self.meses = dataService.getMeses();
	self.cargos = [];
	self.filiais = [];

	var loadCargos = function() {
		cargosApi.getCargos()
		.then(function(dado) {
			self.cargos = dado.data;
		});
	}

	var loadFiliais = function() {
		filiaisApi.getFiliais()
		.then(function(dado) {
			self.filiais = dado.data;
		});
	}

	var loadContratacoes = function(cr) {
		contratacoesApi.getContratacoes(cr)
		.then(function(dado) {
			self.contratacoes = dado.data;
		});
	}

	self.adicionaContratacao = function(keyEvent) {
		if (keyEvent.which === 13) {
			self.saveContratacao(self.cargoNovo);
        }
	}

	self.saveContratacao = function(cont) {
		cont.QtdaMensal = Object.keys(cont.QtdaMensal).map(function (key) { return cont.QtdaMensal[key]; }); //Transforma objeto em array

		var mes = null;
		var qtda = 0;
		cont.QtdaMensal.forEach(function(x,i) {
		 	x.Mes = new Date(2018, i, 1);
		 	if (x.Qtda > 0 && mes === null) mes = x.Mes;
		 	qtda = x.Qtda || qtda;
		});

		mes = mes || new Date(2018, 0, 1);
		cont.Qtda = qtda;
		cont.DataContratacao = mes;
		cont.CargaHoraria = 220;  
		cont.CodigoCR = self.crAtual;
		
		contratacoesApi.postContratacao(cont)
		.then(function(dado) {
			loadContratacoes(self.crAtual);
			self.cargoNovo = null;
		});
	}

	self.deleteContratacao = function(codigo) {
		contratacoesApi.deleteContratacao(codigo)
		.then(function() {
			loadContratacoes(self.crAtual);
		});
	}

	$scope.$on('crOrcamentoChanged', function(event, value) {
		self.crAtual = value;
		loadContratacoes(value);
	});


	loadCargos();
	loadFiliais();

}]);